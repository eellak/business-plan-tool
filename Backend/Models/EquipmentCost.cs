using System;
using System.Collections.Generic;
using System.Text;

namespace Models
{
    public class EquipmentCost
    {
        public int EquipmentId { get; set; }
        public int Cost { get; set; }

        public void SetEquipmentCost(EquipmentCost eqpct)
        {
            this.EquipmentId = eqpct.EquipmentId;
            this.Cost = eqpct.Cost;
        }
    }
}
