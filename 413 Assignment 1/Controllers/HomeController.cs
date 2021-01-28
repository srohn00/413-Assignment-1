using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using _413_Assignment_1.Models;

namespace _413_Assignment_1.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("GradeCalculator")]
        public IActionResult GradeCalculator()
        {
            return View();
        }

        [HttpPost("GradeCalculator")]
        public IActionResult GradeCalculator(GradeCalculatorModel model)
        {
            return View();
        }
    }
}
