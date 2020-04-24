using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using coreapp.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace coreapp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserDetailController : ControllerBase
    {
        private UserManager<ApplicationUser> _userManager;

        public UserDetailController(UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
        }

        [HttpGet]
        [Authorize]
        //GET : /api/ 
        public async Task<Object> GetUserProfile()
        {
            string userID = User.Claims.First(c => c.Type == "UserID").Value;
            var user = await _userManager.FindByIdAsync(userID);
            return new
            {
                user.FullName,
                user.Email,
                user.UserName 
            };

        }
    }
}