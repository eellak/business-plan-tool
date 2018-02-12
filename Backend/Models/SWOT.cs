using System;
using System.Collections.Generic;
using System.Text;

namespace Models
{
    public class SWOT
    {
        public int BusinessPlanId { get; set; }
        public List<string> Strong; //type =1
        public List<string> Weak;   //type=2
        public List<string> Opportunities; //type=3
        public List<string> Threats; //type=4

        public SWOT()
        {
            Strong = new List<string>();
            Weak = new List<string>();
            Opportunities = new List<string>();
            Threats = new List<string>();
        }

        public void setSWOT(SWOT swot)
        {
            this.BusinessPlanId = swot.BusinessPlanId;
            Strong.AddRange(swot.Strong);
            Weak.AddRange(swot.Weak);
            Opportunities.AddRange(swot.Opportunities);
            Threats.AddRange(swot.Threats);

        }
        
    }
}
