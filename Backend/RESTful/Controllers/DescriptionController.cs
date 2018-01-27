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
    public class DescriptionController : ApiController
    {
        // GET api/description
        private Description_Service descService;

        public DescriptionController()
        {
            this.descService = new Description_Service();
        }
        public Description[] Get()
        {
            return descService.ShowAllItems().ToArray();
        }

        // GET api/description/5
        public Description Get(int id)
        {
            var data = descService.SearchId(id);
            if (data.Count > 0)
            {
                return data.ElementAt(0);
            }
            return null;
        }

        // POST api/description
        public Description Post(Description desc)
        {
            if (descService.Insert(desc))
            {
                desc.ID = Program.GetLastId();
                return desc;
            }
            return null;
        }

        // PUT api/description/5
        public Description Put(int id, Description newDescription)
        {
            newDescription.ID = id;
            if (descService.SearchId(id).Count > 0)
            {
                if (descService.Edit(newDescription))
                    return newDescription;
            }
            return null;
        }

        // DELETE api/description/5
        public Description Delete(int id)
        {
            Description oldDescription=new Description();
            var data = descService.SearchId(id);
            if (data.Count > 0)
            {
                oldDescription.SetDescription(data.ElementAt(0));
                if (descService.DeleteId(id))
                    return oldDescription;
            }
            return null;
        }
    }
}
