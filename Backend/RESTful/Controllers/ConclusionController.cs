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
    public class ConclusionController : ApiController
    {
        // GET api/conclusion
        private Conclusion_Service conService;

        public ConclusionController()
        {
            this.conService = new Conclusion_Service();
        }

        public Conclusion[] Get()
        {
            return conService.ShowAllItems().ToArray();
        }

        // GET api/conclusion/5
        public Conclusion Get(int id)
        {
            var data = conService.SearchId(id);
            if (data.Count > 0)
            {
                return data.ElementAt(0);
            }
            return null;
        }

        // POST api/conclusion
        public Conclusion Post(Conclusion con)
        {
            if (conService.Insert(con))
            {
                return con;
            }
            return null;
        }

        // PUT api/conclusion/5
        public Conclusion Put(int id, Conclusion newConclusion)
        {
            newConclusion.BussinesPlanId = id;
            if (conService.SearchId(id).Count > 0)
            {
                if (conService.Edit(newConclusion))
                {
                    return newConclusion;
                }
            }
            return null;
        }

        // DELETE api/conclusion/5
        public Conclusion Delete(int id)
        {
            Conclusion oldConclusion = new Conclusion();
            var data = conService.SearchId(id);
            if (data.Count > 0)
            {
                oldConclusion.SetConclusion(data.ElementAt(0));
                if (conService.DeleteId(id))
                {
                    return oldConclusion;
                }
            }
            return null;
        }
    }
}
