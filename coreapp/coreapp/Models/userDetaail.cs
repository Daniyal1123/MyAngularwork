using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace coreapp.Models
{
    public class userDetaail:DbContext   {
        public userDetaail(DbContextOptions<userDetaail> options):base(options)
        {

        }
        public DbSet<User> UserDetails { get; set; }
    }
}
