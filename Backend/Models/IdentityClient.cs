using System;
using System.Collections.Generic;
using System.Text;

namespace Models
{
    public class IdentityClient
    {
        public int ID { get; set; }
        public int BusinessPlanId { get; set; }
        public string Name { get; set; }
        public int Date { get; set; }
        public string LegalForm { get; set; }
        public string OrderOfBusiness { get; set; }
        public List<Client> Clients { get; set; }

        public IdentityClient()
        {
            this.Clients = new List<Client>();
        }

        public void SetIdentityClient(IdentityClient idnt)
        {
            this.ID = idnt.ID;
            this.BusinessPlanId = idnt.BusinessPlanId;
            this.Name = idnt.Name;
            this.Date = idnt.Date;
            this.LegalForm = idnt.LegalForm;
            this.OrderOfBusiness = idnt.OrderOfBusiness;
            this.Clients.AddRange(idnt.Clients);
        }
    }
}
