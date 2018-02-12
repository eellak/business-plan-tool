using System;
using System.Collections.Generic;
using System.Text;

namespace Models
{
    public class Faculty
    {
        public int ID { get; set; }
        public int BusinessPlanId { get; set; }
        public string Adress { get; set; }
        public string Usage { get; set; }
        public int M2 { get; set; }
        public string Ownership_type { get; set; }
        public int Start_date { get; set; }

        public void SetFaculty(Faculty fclt)
        {
            this.BusinessPlanId = fclt.BusinessPlanId;
            this.ID = fclt.ID;
            this.Adress = fclt.Adress;
            this.Usage = fclt.Usage;
            this.M2 = fclt.M2;
            this.Ownership_type = fclt.Ownership_type;
            this.Start_date = fclt.Start_date;
        }
    }
}
