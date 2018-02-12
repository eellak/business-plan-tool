using System;
using System.Collections.Generic;
using System.Text;
using Models;

namespace Models
{
    public class Description
    {
        public int ID { get; set; }
        public int IdentityId { get; set; }
        public string Text { get; set; }

        public void SetDescription(Description descr)
        {
            this.ID = descr.ID;
            this.IdentityId = descr.IdentityId;
            this.Text = descr.Text;
        }
    }
}
