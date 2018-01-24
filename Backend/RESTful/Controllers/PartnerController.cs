using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Models;
using DBconnection;

namespace ContactManager.Controllers
{
    public class PartnerController : ApiController
    {
        // GET api/partner
        private Partner_Service partService;

        public PartnerController()
        {
            this.partService = new Partner_Service();
        }

        public Partner[] Get()
        {
            return partService.ShowAllItems().ToArray(); 
        }

        // GET api/partner/5
        public Partner Get(int id)
        {
            var data = partService.SearchId(id);
            if (data.Count > 0)
            {
                return data.ElementAt(0);
            }
            return null;
        }

        // POST api/partner
        public Partner Post(Partner partner)
        {
            if (partService.Insert(partner))
            {
                partner.ID = Program.GetLastId();
                return partner;
            }
            return null;
        }

        // PUT api/partner/5
        public Partner Put(int id, Partner newPartner)
        {
            newPartner.ID = id;
            if (partService.SearchId(id).Count > 0)
            {
                if (partService.Edit(newPartner))
                {
                    return newPartner;
                }
            }
            return null;
        }

        // DELETE api/partner/5
        public Partner Delete(int id)
        {
            Partner oldPartner = new Partner();
            var data = partService.SearchId(id);
            if (data.Count > 0)
            {
                oldPartner.SetPartner(data.ElementAt(0));
                if (partService.DeleteId(id)){
                    return oldPartner;
                }
            }
            return null;
        }
    }
}
