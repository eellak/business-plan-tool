using System;
using System.Collections.Generic;
using System.Text;

namespace Models
{
    public class Strategy
    {
        public int BusinessPlanId { get; set; }
        public string Promotion { get; set; }
        public string Contribution { get; set; }
        public string MarketEntry { get; set; }
        public string PublicRelations { get; set; }
        public string Avoid { get; set; }

        public void SetStrategy(Strategy str)
        {
            this.BusinessPlanId = str.BusinessPlanId;
            this.Promotion = str.Promotion;
            this.Contribution = str.Contribution;
            this.MarketEntry = str.MarketEntry;
            this.PublicRelations = str.PublicRelations;
            this.Avoid = str.Avoid;
        }
    }
}
