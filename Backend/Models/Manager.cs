using System;
using System.Collections.Generic;
using System.Text;

namespace Models
{
    public class Manager
    {
        public int ID { get; set; }
        public int BusinessPlanId { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Job { get; set; }
        public string LinkedIn { get; set; }

        public void SetManager(Manager mngr)
        {
            this.BusinessPlanId = mngr.BusinessPlanId;
            this.ID = mngr.ID;
            this.Name = mngr.Name;
            this.Surname = mngr.Surname;
            this.Job = mngr.Job;
            this.LinkedIn = mngr.LinkedIn;
        }
    }
}
