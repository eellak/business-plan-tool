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
    public class FunctionController : ApiController
    {
        // GET api/function
        private Function_Service fncService;

        public FunctionController()
        {
            this.fncService = new Function_Service();
        }

        public Function[] Get()
        {
            return fncService.ShowAllItems().ToArray();
        }

        // GET api/function/5
        public Function Get(int id)
        {
            var data = fncService.SearchId(id);
            if (data.Count > 0)
            {
                return data.ElementAt(0);
            }
            return null;
        }

        // POST api/function
        public Function Post(Function func)
        {
            if (fncService.Insert(func))
            {
                func.ID = Program.GetLastId();
                return func;
            }
            return null;
        }

        // PUT api/function/5
        public Function Put(int id, Function newFunction)
        {
            newFunction.ID = id;
            if (fncService.SearchId(id).Count > 0)
            {
                if (fncService.Edit(newFunction))
                {
                    return newFunction;
                }
            }
            return null;
        }

        // DELETE api/function/5
        public Function Delete(int id)
        {
            Function oldFunction = new Function();
            var data = fncService.SearchId(id);
            if (data.Count > 0)
            {
                oldFunction.SetFunction(data.ElementAt(0));
                if (fncService.DeleteId(id))
                {
                    return oldFunction;
                }
            }
            return null;
        }
    }
}
