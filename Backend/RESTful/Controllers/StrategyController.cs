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
    public class StrategyController : ApiController
    {
        // GET api/strategy
        private Strategy_Service strService;

        public StrategyController()
        {
            this.strService = new Strategy_Service();
        }

        public Strategy[] Get()
        {
            return strService.ShowAllItems().ToArray();
        }

        // GET api/strategy/5
        public Strategy Get(int id)
        {
            var data = strService.SearchId(id);
            if (data.Count > 0)
            {
                return data.ElementAt(0);
            }
            return null;
        }

        // POST api/strategy
        public Strategy Post(Strategy str)
        {
            if (strService.Insert(str))
            {
                return str;
            }
            return null;
        }

        // PUT api/strategy/5
        public Strategy Put(int id, Strategy newStrategy)
        {
            if (strService.SearchId(id).Count > 0)
            {
                if (strService.Edit(newStrategy))
                {
                    return newStrategy;
                }
            }
            return null;
        }

        // DELETE api/strategy/5
        public Strategy Delete(int id)
        {
            Strategy oldStrategy = new Strategy();
            var data = strService.SearchId(id);
            if (data.Count > 0)
            {
                oldStrategy.SetStrategy(data.ElementAt(0));
                if (strService.DeleteId(id))
                {
                    return oldStrategy;
                }
            }
            return null;
        }
    }
}
