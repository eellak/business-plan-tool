using System;
using System.Collections.Generic;

namespace Models
{
    public class Identity
    {
        public int ID { get; set; }
        public int BusinessPlanId { get; set; }
        public string Name { get; set; }
        public int Date { get; set; }
        public string LegalForm { get; set; }
        public string OrderOfBusiness { get; set; }
        

        public void SetIdentity(Identity idnt)
        {
            this.ID = idnt.ID;
            this.BusinessPlanId = idnt.BusinessPlanId;
            this.Name = idnt.Name;
            this.Date = idnt.Date;
            this.LegalForm = idnt.LegalForm;
            this.OrderOfBusiness = idnt.OrderOfBusiness;
            //this.Clients=idnt.Clients;
        }
    }
}
