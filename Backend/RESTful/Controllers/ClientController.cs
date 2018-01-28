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
    public class ClientController : ApiController
    {
        // GET api/client
        private Client_Service clnService;

        public ClientController()
        {
            clnService = new Client_Service();
        }
        public Client[] Get()
        {
            return clnService.ShowAllItems().ToArray();
        }

        // GET api/client/5
        public Client Get(int id)
        {
            var data = clnService.SearchId(id);
            if (data.Count > 0)
            {
                return data.ElementAt(0);
            }
            return null;
        }

        // POST api/client
        public Client Post(Client newClient)
        {
            if (clnService.Insert(newClient))
            {
                newClient.ID = Program.GetLastId();
                return newClient;
            }
            return null;
        }

        // PUT api/client/5
        public Client Put(int id, Client newClient)
        {
            if (clnService.SearchId(id).Count>0)
            {
                if(clnService.Edit(newClient))
                {
                    newClient.ID = id;
                    return newClient;
                }
            }
            return null;
        }

        // DELETE api/client/5
        public Client Delete(int id)
        {
            Client oldClient = new Client();
            var data = clnService.SearchId(id);
            if (data.Count > 0)
            {
                oldClient.SetClient(data.ElementAt(0));
                if (clnService.DeleteId(id))
                {
                    return oldClient;
                }
            }
            return null;
        }
    }
}
