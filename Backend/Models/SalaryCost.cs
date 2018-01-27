using System;
using System.Collections.Generic;
using System.Text;

namespace Models
{
    public class SalaryCost
    {
        public List<EmployeeSalary> EmploySalaries;
        public int SalaryTotalCost { get; set; }

        public void SetSalaryCost()
        {
            EmploySalaries = new List<EmployeeSalary>();
        }


    }
}
