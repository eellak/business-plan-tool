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
    public class FunctionCostController : ApiController
    {
        private FunctionCost_Service fncCostService;
        
        public FunctionCostController()
        {
            this.fncCostService = new FunctionCost_Service();
        }

        public FunctionCost GET()
        {
            return fncCostService.showAllItems();
        }
    }
}
