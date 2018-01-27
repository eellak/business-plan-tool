using System;
using System.Collections.Generic;
using System.Text;

namespace Models
{
    public class StartAction
    {
        public int ID { get; set; }
        public int BusinessPlanId { get; set; }
        public string Name { get; set; }
        public int ActionCost { get; set; }

        public void SetStartAction(StartAction stract)
        {
            this.ID = stract.ID;
            this.BusinessPlanId = stract.BusinessPlanId;
            this.Name = stract.Name;
            this.ActionCost = stract.ActionCost;
        }
    }
}
