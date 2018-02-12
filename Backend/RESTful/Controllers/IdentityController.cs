using System.Linq;
using System.Web.Http;
using Models;
using DBconnection;

namespace ContactManager.Controllers
{
    public class IdentityController : ApiController
    {
        // GET api/identity
        private Identity_Service idntService;

        public IdentityController()
        {
            this.idntService = new Identity_Service();
        }

        public Identity[] Get()
        {
            return idntService.ShowAllItems().ToArray();
        }

        // GET api/identity/id
        public Identity Get(int id)
        {
            var data = idntService.SearchId(id);
            if (data.Count > 0)
            {
                return data.ElementAt(0);
            }
            return null;
        }

        // POST api/identity
        public Identity Post(Identity identity)
        {
            if (idntService.Insert(identity))
            {
                identity.ID = Program.GetLastId();
                return identity;
            }
            return null;
        }

        // PUT api/identity/id
        public Identity Put(int id,Identity newIdentity )
        {
            newIdentity.ID = id;
            if (idntService.SearchId(id).Count > 0)
            {
                if (idntService.Edit(newIdentity))
                    return newIdentity;
            }
            return null;
            
        }

        // DELETE api/identity/id
        public Identity Delete(int id)
        {
            Identity oldIdentity=new Identity();
            var data = idntService.SearchId(id);
            if (data.Count > 0)
            {
                oldIdentity.SetIdentity(data.ElementAt(0));
                if (idntService.DeleteId(id))
                {
                    return oldIdentity;
                }
            }
            return null;
        }
    }
}
