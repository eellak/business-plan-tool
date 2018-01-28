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
    public class RunningCostController : ApiController
    {
        private RunningCost_Service runCostService;

        public RunningCostController()
        {
            this.runCostService = new RunningCost_Service();
        }

        public RunningCost Get()
        {
            return runCostService.showAllItems();    
        }

    }
}
