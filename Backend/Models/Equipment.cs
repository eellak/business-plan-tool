using System;
using System.Collections.Generic;
using System.Text;

namespace Models
{
    public class Equipment
    {
        public int ID { get; set; }
        public int BusinessPlanId { get; set; }
        public string EquipType { get; set; }
        public string Address { get; set; }
        public string Division { get; set; }
        public int Firsthand { get; set; }
        public int Acquisition_date { get; set; }
        
        public void SetEquipment(Equipment eqp)
        {
            this.ID = eqp.ID;
            this.BusinessPlanId = eqp.BusinessPlanId;
            this.EquipType = eqp.EquipType;
            this.Address = eqp.Address;
            this.Division = eqp.Division;
            this.Firsthand = eqp.Firsthand;
            this.Acquisition_date = eqp.Acquisition_date;
        }
    }
}
