using System;
using System.Collections.Generic;
using System.Text;

namespace Models
{
    public class ActionsCost
    {
        public List<Action> Actions;
        public int ActionsTotalCost { get; set; }

        public ActionsCost()
        {
            Actions = new List<Action>();
        }

        public void SetActionsCost(ActionsCost accst)
        {
            this.ActionsTotalCost = accst.ActionsTotalCost;
            Actions = new List<Action>();
            Actions.AddRange(accst.Actions);
        }
    }
}
