using System;
using System.Collections.Generic;
using System.Text;

namespace Models
{
    public class Link
    {
        public int ID { get; set; }
        public int BusinessPlanId { get; set; }
        public string URL { get; set; }
        public string Title { get; set; }
        public string Section { get; set; }

        public void SetLink(Link link)
        {
            this.ID = link.ID;
            this.BusinessPlanId = link.BusinessPlanId;
            this.URL = link.URL;
            this.Title = link.Title;
            this.Section = link.Section;
        }
    }
}
