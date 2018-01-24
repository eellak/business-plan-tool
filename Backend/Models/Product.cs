using System;
using System.Collections.Generic;
using System.Text;

namespace Models
{
    public class Product
    {
        public int ID { get; set; }
        public int BusinessPlanId { get; set; }
        public bool ProductType { get; set; }
        public string Name { get; set; }
        public string Directed_to { get; set; }
        public string Innovation_factor { get; set; }
        public string Technology { get; set; }
        public string License { get; set; }
        public string Competition { get; set; }
        public int Price { get; set; }
        public string Description { get; set; }
        public string Copyright { get; set; }
        public string Certificate { get; set; }
        public int ProductCost { get; set; }
        public int NumProduct { get; set; }
        public int PercentageIncome { get; set; }



        public void SetProduct(Product chr)
        {
            this.ID = chr.ID;
            this.BusinessPlanId = chr.BusinessPlanId;
            this.ProductType = chr.ProductType;
            this.Name = chr.Name;
            this.Directed_to = chr.Directed_to;
            this.Innovation_factor = chr.Innovation_factor;
            this.Technology = chr.Technology;
            this.Copyright = chr.Copyright;
            this.Certificate = chr.Certificate;
            this.License = chr.License;
            this.Competition = chr.Competition;
            this.Price = chr.Price;
            this.Description = chr.Description;
            this.ProductCost = chr.ProductCost;
            this.NumProduct = chr.NumProduct;
            this.PercentageIncome = chr.PercentageIncome;
        }
    }
}
