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
        public Factor Get(int id)
        {
            var data = facService.SearchId(id);
            if (data.Count > 0)
            {
                return data.ElementAt(0);
            }
            return null;
        }

        // POST api/factor
        public Factor Post(Factor fac)
        {
            if (facService.Insert(fac))
            {
                fac.ID = Program.GetLastId();
                return fac;
            }
            return null;
        }

        // PUT api/factor/5
        public Factor Put(int id, Factor newFactor)
        {
            newFactor.ID = id;
            if (facService.SearchId(id).Count > 0)
            {
                if (facService.Edit(newFactor))
                {
                    return newFactor;
                }
            }
            return null;
        }

        // DELETE api/factor/5
        public Factor Delete(int id)
        {
            Factor oldFactor = new Factor();
            var data = facService.SearchId(id);
            if (data.Count > 0)
            {
                oldFactor.SetFactor(data.ElementAt(0));
                if (facService.DeleteId(id))
                {
                    return oldFactor;
                }
            }
            return null;
        }
    }
}
