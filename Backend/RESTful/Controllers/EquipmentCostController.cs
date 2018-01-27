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
    public class EquipmentCostController : ApiController
    {
        // GET api/equipmentcost
        private EquipmentCost_Service eqpCostService;

        public EquipmentCostController()
        {
            this.eqpCostService = new EquipmentCost_Service();
        }

        public EquipmentCost[] Get()
        {
            return eqpCostService.ShowAllItems().ToArray();
        }

        // GET api/equipmentcost/5
        public EquipmentCost Get(int id)
        {
            var data = eqpCostService.SearchId(id);
            if (data.Count > 0)
            {
                return data.ElementAt(0);
            }
            return null;
        }

        // POST api/equipmentcost
        public EquipmentCost Post(EquipmentCost eqpCost)
        {
            if (eqpCostService.Insert(eqpCost))
            {
                return eqpCost;
            }
            return null;
        }

        // PUT api/equipmentcost/5
        public EquipmentCost Put(int id, EquipmentCost newEquipmentCost)
        {
            if (eqpCostService.SearchId(id).Count > 0)
            {
                if (eqpCostService.Edit(newEquipmentCost))
                {
                    return newEquipmentCost;
                }
            }
            return null;
        }

        // DELETE api/equipmentcost/5
        public EquipmentCost Delete(int id)
        {
            EquipmentCost oldEquipmentCost = new EquipmentCost();
            var data = eqpCostService.SearchId(id);
            if (data.Count > 0)
            {
                oldEquipmentCost.SetEquipmentCost(data.ElementAt(0));
                if (eqpCostService.DeleteId(id))
                {
                    return oldEquipmentCost;
                }
            }
            return null;
        }
    }
}
