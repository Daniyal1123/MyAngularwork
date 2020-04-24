using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace coreapp.Models
{
    public class User
    {    [Key]
        public int userID { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public  string userName { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string age { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string courseName { get; set; }

        

    }
}
