using System;
using System.Collections.Generic;
using System.Text;

namespace Models
{
    public class Deadspot
    {
        public int ProductID { get; set; }
        public int BusinessPlanId { get; set; }
        public string Spot { get; set; }

        public void SetDeadspot(Deadspot dspt)
        {
            this.ProductID = dspt.ProductID;
            this.BusinessPlanId = dspt.BusinessPlanId;
            this.Spot = dspt.Spot;
        }
    }
}
