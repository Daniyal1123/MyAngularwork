using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using coreapp.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace coreapp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApplicationUserController : ControllerBase
    {
        private UserManager<ApplicationUser> _userManager;
        private SignInManager<ApplicationUser> _signinManager;
        private readonly ApplicationSettings _appsettings;
        public ApplicationUserController(UserManager<ApplicationUser> userManager , SignInManager<ApplicationUser> signinMAnager,IOptions<ApplicationSettings> appsettings)
        {
            _userManager = userManager;
            _signinManager = signinMAnager;
            _appsettings = appsettings.Value;
        }
        [HttpPost]
        [Route("register")]
        // Post : /api/applicationuser/Register
        public async Task<Object> PostApplicationUser(ApplicationUserModel model)
        {
            //model.Role = "Customer";
            var applicationuser = new ApplicationUser()
            {
                UserName = model.UserName,
                Email = model.Email,
                FullName = model.FullName

            };

            try{
                var result =await _userManager.CreateAsync(applicationuser, model.Password);
                //await _userManager.AddToRoleAsync(applicationuser, model.Role);
                return Ok(result);
            }
            catch(Exception e)
            {
                throw e;
            }
        }



        [HttpPost]
        [Route("login")]
        // Post : /api/applicationuser/login
        public async Task<IActionResult> Login(LoginModel model)
        {

            var user = await _userManager.FindByNameAsync(model.UserName);
            if ( user != null && await _userManager.CheckPasswordAsync(user, model.Password))
            {
                var tokendescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                        new Claim("UserID", user.Id.ToString())
                    }),
                    Expires = DateTime.UtcNow.AddDays(5),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_appsettings.JWT_Secret)), SecurityAlgorithms.HmacSha256)
                };
                var tokenHandler = new JwtSecurityTokenHandler();
                var securityToken = tokenHandler.CreateToken(tokendescriptor);
                var token = tokenHandler.WriteToken(securityToken);
                return Ok(new { token });
            }
            else
            {
                return BadRequest(new { message = "Username or password is correct" });
            }

        }
    }
}