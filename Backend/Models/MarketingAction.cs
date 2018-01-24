using System;
using System.Collections.Generic;
using System.Text;

namespace Models
{
    public class MarketingAction
    {
        public int ID { get; set; }
        public int BusinessPlanId { get; set; }
        public string Title { get; set; }
        public int ImplementationTime { get; set; }
        public int Frequency { get; set; }
        public int ImplementationCost { get; set; }
        public string TotalCost { get; set; }

        public void SetMarketingAction(MarketingAction mrkact)
        {
            this.ID = mrkact.ID;
            this.BusinessPlanId = mrkact.BusinessPlanId;
            this.Title = mrkact.Title;
            this.ImplementationCost = mrkact.ImplementationCost;
            this.Frequency = mrkact.Frequency;
            this.ImplementationTime = mrkact.ImplementationTime;
            this.TotalCost = mrkact.TotalCost;
        }
    }
}
