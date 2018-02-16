using System;
using System.Collections.Generic;
using System.Text;

namespace Models
{
    public class Partner
    {
        public int ID { get; set; }
        public int BusinessPlanId { get; set; }
        public string Name { get; set; }
        public string SurName { get; set; }
        public string Expertise { get; set; }
        public string LinkedIn { get; set; }
        public int From { get; set; }
        public int Until { get; set; }
        public string Duties { get; set; }

        public void SetPartner(Partner part)
        {
            this.ID = part.ID;
            this.BusinessPlanId = part.BusinessPlanId;
            this.Name = part.Name;
            this.SurName = part.SurName;
            this.Expertise = part.Expertise;
            this.LinkedIn = part.LinkedIn;
            this.From = part.From;
            this.Until = part.Until;
            this.Duties = part.Duties;
        }
    }
}
