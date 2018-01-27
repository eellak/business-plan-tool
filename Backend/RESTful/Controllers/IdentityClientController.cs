using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DBconnection;
using Models;

namespace ContactManager.Controllers
{
    public class IdentityClientController : ApiController
    {
        private IdentityClient_Service idntClientService;

        public IdentityClientController()
        {
            this.idntClientService = new IdentityClient_Service();
        }

        public IdentityClient[] Get()
        {
            return idntClientService.ShowAllItems().ToArray();
        }
    }
}
