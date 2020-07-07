using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace DataModel
{
    public class Empleado
    {
        public string Nombre { get; set; }
        public DateTime Nacimiento { get; set; }


    }

}
