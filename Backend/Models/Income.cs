using System;
using System.Collections.Generic;
using System.Text;

namespace Models
{
    public class Income
    {
        public int ID { get; set; }
        public bool ProductType { get; set; }
        public string Name { get; set; }
        public int SellPrice { get; set; }
        public int ProductCost { get; set; }
        public int NumProcuct { get; set; }
        public int PersentageIncrease { get; set; }

        public void SetIncome(Income inc)
        {
            this.ID = inc.ID;
            this.ProductCost = inc.ProductCost;
            this.ProductType = inc.ProductType;
            this.Name = inc.Name;
            this.SellPrice = inc.SellPrice;
            this.NumProcuct = inc.NumProcuct;
            this.PersentageIncrease = inc.PersentageIncrease;
        }
    }
}
