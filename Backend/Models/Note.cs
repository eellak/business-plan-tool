using System;
using System.Collections.Generic;
using System.Text;

namespace Models
{
    public class Note
    {
        public int BusinessPlanId { get; set; }
        public string Text { get; set; }

        public void SetNote(Note note)
        {
            this.BusinessPlanId = note.BusinessPlanId;
            this.Text = note.Text;
        }
    }
}
