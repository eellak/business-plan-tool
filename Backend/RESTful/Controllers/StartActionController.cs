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
    public class StartActionController : ApiController
    {
        // GET api/startaction
        private StartAction_Service strActService;

        public StartActionController()
        {
            this.strActService = new StartAction_Service();
        }

        public StartAction[] Get()
        {
            return strActService.ShowAllItems().ToArray();
        }

        // GET api/startaction/5
        public StartAction Get(int id)
        {
            var data = strActService.SearchId(id);
            if (data.Count > 0)
            {
                return data.ElementAt(0);
            }
            return null;
        }

        // POST api/startaction
        public StartAction Post(StartAction strAct)
        {
            if (strActService.Insert(strAct))
            {
                strAct.ID = Program.GetLastId();
                return strAct;
            }
            return null;
        }

        // PUT api/startaction/5
        public StartAction Put(int id, StartAction newStartAction)
        {
            newStartAction.ID = id;
            if (strActService.SearchId(id).Count > 0)
            {
                if (strActService.Edit(newStartAction))
                {
                    return newStartAction;
                }
            }
            return null;
        }

        // DELETE api/startaction/5
        public StartAction Delete(int id)
        {
            StartAction oldStartAction = new StartAction();
            var data = strActService.SearchId(id);
            if (data.Count > 0)
            {
                oldStartAction.SetStartAction(data.ElementAt(0));
                if (strActService.DeleteId(id))
                {
                    return oldStartAction;
                }
            }
            return null;
        }
    }
}
