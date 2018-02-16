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
    public class ManagerController : ApiController
    {
        // GET api/manager
        Manager_Service mngrService;

        public ManagerController()
        {
            this.mngrService = new Manager_Service();
        }
        public Manager[] Get()
        {
            return mngrService.ShowAllItems().ToArray();
        }

        // GET api/manager/5
        public Manager Get(int id)
        {
            var data = mngrService.SearchId(id);
            if (data.Count > 0)
            {
                return data.ElementAt(0);
            }
            return null;
        }

        // POST api/manager
        public Manager Post(Manager mngr)
        {
            if (mngrService.Insert(mngr))
            {
                mngr.ID = Program.GetLastId();
                return mngr;
            }
            return null;
        }

        // PUT api/manager/5
        public Manager Put(int id, Manager newManager)
        {
            newManager.ID = id;
            if (mngrService.SearchId(id).Count > 0)
            {
                if (mngrService.Edit(newManager))
                {
                    return newManager;
                }
            }
            return null;
        }

        // DELETE api/manager/5
        public Manager Delete(int id)
        {
            Manager oldManager = new Manager();
            var data = mngrService.SearchId(id);
            if (data.Count > 0)
            {
                oldManager.SetManager(data.ElementAt(0));
                if (mngrService.DeleteId(id))
                    return oldManager;
            }
            return null;
        }
    }
}
