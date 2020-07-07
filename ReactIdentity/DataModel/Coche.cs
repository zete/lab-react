using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace DataModel
{
    public class Coche
    {
        [Key]
        public int Id { get; set; }
        public string Anyo { get; set; }
        public string Nombre { get; set; }

    }

}
