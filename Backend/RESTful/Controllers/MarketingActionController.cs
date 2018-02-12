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
    public class MarketingActionController : ApiController
    {
        // GET api/marketingaction
        private MarketingAction_Service mrkActionService;

        public MarketingActionController()
        {
            this.mrkActionService = new MarketingAction_Service();
        }

        public MarketingAction[] Get()
        {
            return mrkActionService.ShowAllItems().ToArray();
        }

        // GET api/marketingaction/5
        public MarketingAction Get(int id)
        {
            var data = mrkActionService.SearchId(id);
            if (data.Count > 0)
            {
                return data.ElementAt(0);
            }
            return null;
        }

        // POST api/marketingaction
        public MarketingAction Post(MarketingAction mrkAction)
        {
            if(mrkActionService.Insert(mrkAction))
            {
                mrkAction.ID = Program.GetLastId();
                return mrkAction;
            }
            return null;
        }

        // PUT api/marketingaction/5
        public MarketingAction Put(int id, MarketingAction newMarketingAction)
        {
            newMarketingAction.ID = id;
            if (mrkActionService.SearchId(id).Count > 0)
            {
                if (mrkActionService.Edit(newMarketingAction))
                {
                    return newMarketingAction;
                }
            }
            return null;
        }

        // DELETE api/marketingaction/5
        public MarketingAction Delete(int id)
        {
            MarketingAction oldMarketingAction = new MarketingAction();
            var data = mrkActionService.SearchId(id);
            if (data.Count > 0)
            {
                oldMarketingAction.SetMarketingAction(data.ElementAt(0));
                if (mrkActionService.DeleteId(id))
                {
                    return oldMarketingAction;
                }
            }
            return null;
        }
    }
}
