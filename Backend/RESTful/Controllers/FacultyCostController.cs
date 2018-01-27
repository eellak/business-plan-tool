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
    public class FacultyCostController : ApiController
    {
        // GET api/facultycost
        private FacultyCost_Service fctCostService;

        public FacultyCostController()
        {
            this.fctCostService = new FacultyCost_Service();
        }

        public FacultyCost[] Get()
        {
            return fctCostService.ShowAllItems().ToArray();
        }

        // GET api/facultycost/5
        public FacultyCost Get(int id)
        {
            var data = fctCostService.SearchId(id);
            if (data.Count > 0)
            {
                return data.ElementAt(0);
            }
            return null;
        }

        // POST api/facultycost
        public FacultyCost Post(FacultyCost facCost)
        {
            if (fctCostService.Insert(facCost))
            {
                return facCost;
            }
            return null;
        }

        // PUT api/facultycost/5
        public FacultyCost Put(int id, FacultyCost newFacultyCost)
        {
            if (fctCostService.SearchId(id).Count > 0)
            {
                if (fctCostService.Edit(newFacultyCost))
                {
                    return newFacultyCost;
                }
            }
            return null;
        }

        // DELETE api/facultycost/5
        public FacultyCost Delete(int id)
        {
            FacultyCost oldFacultyCost = new FacultyCost();
            var data = fctCostService.SearchId(id);
            if (data.Count > 0)
            {
                oldFacultyCost.SetFacultyCost(data.ElementAt(0));
                if (fctCostService.DeleteId(id))
                {
                    return oldFacultyCost;
                }
            }
            return null;
        }
    }
}
