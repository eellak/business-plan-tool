using System;
using System.Collections.Generic;
using System.Text;

namespace Models
{
    public class Client
    {
        public int ID { get; set; }
        public int IdentityId { get; set; }
        public string Name { get; set; }

        public void SetClient(Client clnt)
        {
            this.ID = clnt.ID;
            this.IdentityId = clnt.IdentityId;
            this.Name = clnt.Name;
        }
    }
}
