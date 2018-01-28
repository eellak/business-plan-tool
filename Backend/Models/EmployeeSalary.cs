using System;
using System.Collections.Generic;
using System.Text;

namespace Models
{
    public class EmployeeSalary
    {
        public int EmployeeID { get; set; }
        public int Salary { get; set; }
        public int Bonus { get; set; }
        public string Employment_type { get; set; }

        public void SetEmployeeSalary(EmployeeSalary empslr)
        {
            this.EmployeeID = empslr.EmployeeID;
            this.Salary = empslr.Salary;
            this.Bonus = empslr.Bonus;
            this.Employment_type = empslr.Employment_type;
        }
    }
}
