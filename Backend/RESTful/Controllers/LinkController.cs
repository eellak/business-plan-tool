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
    public class LinkController : ApiController
    {
        // GET api/link
        private Link_Service linkService;

        public LinkController()
        {
            this.linkService = new Link_Service();
        }
        
        public Link[] Get()
        {
            return linkService.ShowAllItems().ToArray();
        }

        // GET api/link/5
        public Link Get(int id)
        {
            var data = linkService.SearchId(id);
            if (data.Count > 0)
            {
                return data.ElementAt(0);
            }
            return null;
        }

        // POST api/link
        public Link Post(Link link)
        {
            if (linkService.Insert(link))
            {
                link.ID = Program.GetLastId();
                return link;
            }
            return null;
        }

        // PUT api/link/5
        public Link Put(int id, Link newLink)
        {
            newLink.ID = id;
            if (linkService.SearchId(id).Count > 0)
            {
                if (linkService.Edit(newLink)){
                    return newLink;
                }
            }
            return null;
        }

        // DELETE api/link/5
        public Link Delete(int id)
        {
            Link oldLink = new Link();
            var data = linkService.SearchId(id);
            if (data.Count > 0)
            {
                oldLink.SetLink(data.ElementAt(0));
                if (linkService.DeleteId(id))
                {
                    return oldLink;
                }
            }
            return null;
        }
    }
}
