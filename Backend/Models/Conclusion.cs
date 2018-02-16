using System;
using System.Collections.Generic;
using System.Text;

namespace Models
{
    public class Conclusion
    {
        public int BussinesPlanId { get; set; }
        public string Text { get; set; }
        
        public void SetConclusion(Conclusion cncl)
        {
            this.BussinesPlanId = cncl.BussinesPlanId;
            this.Text = cncl.Text;
        }
    }
}
