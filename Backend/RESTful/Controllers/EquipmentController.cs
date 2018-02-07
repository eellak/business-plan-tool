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
    public class EquipmentController : ApiController
    {
        // GET api/equipment
        private Equipment_Service eqpService;

        public EquipmentController()
        {
            this.eqpService = new Equipment_Service();
        }
        public Equipment[] Get()
        {
            return eqpService.ShowAllItems().ToArray();
        }

        // GET api/equipment/5
        public Equipment Get(int id)
        {
            var data = eqpService.SearchId(id);
            if (data.Count > 0)
            {
                return data.ElementAt(0);
            }
            return null;
        }

        // POST api/equipment
        public Equipment Post(Equipment eqp)
        {
            if (eqpService.Insert(eqp))
            {
                eqp.ID = Program.GetLastId();
                return eqp;
            }
            return null;
        }

        // PUT api/equipment/5
        public Equipment Put(int id, Equipment newEquipment)
        {
            newEquipment.ID = id;
            if (eqpService.SearchId(id).Count > 0)
            {
                if (eqpService.Edit(newEquipment))
                {
                    return newEquipment;
                }
            }
            return null;
        }

        // DELETE api/equipment/5
        public Equipment Delete(int id)
        {
            Equipment oldEquipment = new Equipment();
            var data = eqpService.SearchId(id);
            if (data.Count > 0)
            {
                oldEquipment.SetEquipment(data.ElementAt(0));
                if (eqpService.DeleteId(id))
                {
                    return oldEquipment;
                }
            }
            return null;
        }
    }
}
