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
    public class DeadspotController : ApiController
    {
        // GET api/deadspot
        private Deadspot_Service deadService;

        public DeadspotController()
        {
            this.deadService = new Deadspot_Service();
        }

        public Deadspot[] Get()
        {
            return deadService.ShowAllItems().ToArray();
        }

        // GET api/deadspot/5
        public Deadspot Get(int id)
        {
            var data = deadService.SearchId(id);
            if (data.Count > 0)
            {
                return data.ElementAt(0);
            }
            return null;
        }

        // POST api/deadspot
        public Deadspot Post(Deadspot deadspot)
        {
            if (deadService.Insert(deadspot))
            {
                return deadspot;
            }
            return null;
        }

        // PUT api/deadspot/5
        public Deadspot Put(int id, Deadspot newDeadspot)
        {
            newDeadspot.ProductID = id;
            if (deadService.SearchId(id).Count > 0)
            {
                if (deadService.Edit(newDeadspot))
                {
                    return newDeadspot;
                }
            }
            return null;
        }

        // DELETE api/deadspot/5
        public Deadspot Delete(int id)
        {
            Deadspot oldDeadspot = new Deadspot();
            var data = deadService.SearchId(id);
            if (data.Count > 0)
            {
                oldDeadspot.SetDeadspot(data.ElementAt(0));
                if (deadService.DeleteId(id))
                {
                    return oldDeadspot;
                }
            }
            return null;
        }
    }
}
