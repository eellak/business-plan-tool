using System;
using System.Collections.Generic;
using System.Text;

namespace Models
{
    public class Employee
    {
        public int ID { get; set; }
        public int BusinessPlanId { get; set; }
        public string Job { get; set; }

        public void SetEmployee(Employee emp)
        {
            this.ID = emp.ID;
            this.BusinessPlanId = emp.BusinessPlanId;
            this.Job = emp.Job;
        }
    }
}
