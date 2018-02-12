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
    public class FactorController : ApiController
    {
        // GET api/factor
        private Factor_Service facService;

        public FactorController()
        {
            this.facService = new Factor_Service();
        }

        public Factor[] Get()
        {
            return facService.ShowAllItems().ToArray();
        }

        // GET api/factor/5
        public Factor[] Get(int id)
        {
            var data = facService.SearchId(id);
            if (data.Count > 0)
            {
                return data.ToArray();
            }
            return null;
        }

        // POST api/factor
        public Factor Post(Factor fac)
        {
            if (facService.Insert(fac))
            {
                return fac;
            }
            return null;
        }

        // PUT api/factor/5
        public Factor Put(int id, Factor newFactor)
        {
            if (facService.SearchFactor(newFactor.BusinessPlanId,newFactor.ID).Count > 0)
            {
                if (facService.Edit(id, newFactor))
                {
                    newFactor.BusinessPlanId = id;
                    return newFactor;
                }
            }
            return null;
        }

        // DELETE api/factor
        public Factor Delete(Factor factor)
        {
            if (facService.DeleteId(factor.BusinessPlanId,factor.ID))
            {
                return factor;
            }
            return null;
        }

        // DELETE api/factor/1
        public Factor[] Delete(int id)
        {
            var data = facService.SearchId(id);
            if (data.Count > 0)
            {
                if (facService.DeleteId(id))
                {
                    return data.ToArray();
                }

            }
            return null;
        }
    }
}
