using System;
using System.Collections.Generic;
using System.Text;

namespace Models
{
    public class FunctionCost
    {
        public List<Function> Functions;
        public int FunctionsTotalCost { get; set; }

        public FunctionCost()
        {
            Functions = new List<Function>();
        }

        public void SetFunctionCost(FunctionCost fncst)
        {
            this.FunctionsTotalCost = fncst.FunctionsTotalCost;
            Functions = new List<Function>();
            Functions.AddRange(fncst.Functions);
        }

    }
}
