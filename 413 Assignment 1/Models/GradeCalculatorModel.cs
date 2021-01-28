using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace _413_Assignment_1.Models
{
    public class GradeCalculatorModel
    {
        [Range (typeof(int), "0", "100")]
        public int assignments { get; set; }
        [Range (0, 100)]

        public int groupProjects { get; set; }
        [Range (0, 100)]
        public int quizzes { get; set; }
        [Range (0, 100)]
        public int exams { get; set; }
        [Range (0, 100)]
        public int intex { get; set; }
    }
}
