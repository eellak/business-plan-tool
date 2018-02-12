using System;
using System.Collections.Generic;
using System.Text;

namespace Models
{
    public class FacultyCost
    {
        public int FacultyId { get; set; }
        public int Cost { get; set; }

        public void SetFacultyCost(FacultyCost fclct)
        {
            this.FacultyId = fclct.FacultyId;
            this.Cost = fclct.Cost;
        }
    }
}
