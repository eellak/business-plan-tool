using System;
using System.Collections.Generic;
using System.Text;

namespace Models
{
    public class Factor
    {
        public int ID { get; set; }
        public int BusinessPlanId { get; set; }
        public string Description { get; set; }
        public string Example { get; set; }

        public void SetFactor(Factor fct)
        {
            this.ID = fct.ID;
            this.BusinessPlanId = fct.BusinessPlanId;
            this.Description = fct.Description;
            this.Example = fct.Example;
        }
    }
}
