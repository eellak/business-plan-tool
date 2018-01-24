using System;
using System.Collections.Generic;
using System.Text;

namespace Models
{
    public class Function
    {
        public int ID { get; set; }
        public int BusinessPlanId { get; set; }
        public string Name { get; set; }
        public int FunctionCost { get; set; }

        public void SetFunction(Function fnct)
        {
            this.ID = fnct.ID;
            this.BusinessPlanId = fnct.BusinessPlanId;
            this.Name = fnct.Name;
            this.FunctionCost = fnct.FunctionCost;
        }
    }
}
