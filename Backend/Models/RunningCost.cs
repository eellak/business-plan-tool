using System;
using System.Collections.Generic;
using System.Text;

namespace Models
{
    public class RunningCost
    {
        public List<FacultyCost> FacultyCosts;
        public List<EquipmentCost> EquipmentCosts;
        public int FacultyExpenses { get; set; }
        public int EquipmentExpenses { get; set; }

        public RunningCost()
        {
            FacultyCosts = new List<FacultyCost>();
            EquipmentCosts = new List<EquipmentCost>();
        }

        public void SetRunningCost(RunningCost rncst)
        {
            this.FacultyExpenses = rncst.FacultyExpenses;
            this.EquipmentExpenses = rncst.EquipmentExpenses;
            FacultyCosts = new List<FacultyCost>();
            EquipmentCosts = new List<EquipmentCost>();
            FacultyCosts.AddRange(rncst.FacultyCosts);
            EquipmentCosts.AddRange(rncst.EquipmentCosts);
        }

    }
}
