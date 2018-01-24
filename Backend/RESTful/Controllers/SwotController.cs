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
    public class SwotController : ApiController
    {
        // GET api/swot
        private Swot_Service swotService;

        public SwotController()
        {
            this.swotService = new Swot_Service();
        }

        public SWOT[] Get()
        {
            return swotService.ShowAllItems().ToArray();
        }

        // GET api/swot/5
        public SWOT Get(int id)
        {
            var data = swotService.SearchId(id);
            if (data.Count > 0)
            {
                return data.ElementAt(0); 
            }
            return null; 
        }

        // POST api/swot
        public SWOT Post(SWOT swot)
        {
            if (swotService.Insert(swot))
            {
                return swot;
            }
            return null;
        }

        // PUT api/swot/5
        public SWOT Put(int id, SWOT newSwot)
        {
            newSwot.BusinessPlanId = id;
            if (swotService.SearchId(id).Count > 0)
            {
                if (swotService.Edit(newSwot))
                {
                    return newSwot;
                }
            }
            return null; 
        }

        // DELETE api/swot/5
        public SWOT Delete(int id)
        {
            SWOT oldSwot = new SWOT();
            var data = swotService.SearchId(id);
            if (data.Count > 0)
            {
                oldSwot.setSWOT(data.ElementAt(0));
                if (swotService.DeleteId(id))
                {
                    return oldSwot;
                }
            }
            return null; 
        }
    }
}
