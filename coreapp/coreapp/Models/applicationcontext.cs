using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace coreapp.Models
{
    public class applicationcontext : IdentityDbContext
    {
        public applicationcontext(DbContextOptions options):base(options)
        {

        }
        public DbSet<ApplicationUser> ApplicationUsers
        {
            get;
            set;
        }
    }
}
