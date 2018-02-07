using System.Collections.Generic;
using System;
using System.Linq;
using System.Web.Http;
using Models;
using DBconnection;

namespace ContactManager.Controllers
{
    public class NoteController : ApiController
    {
        // GET api/note
        private Note_Service ntService;

        public NoteController()
        {
            this.ntService = new Note_Service();
        }

        public Note[] Get()
        {
            return ntService.ShowAllItems().ToArray();
        }

        // GET api/note/5
        public Note Get(int id)
        {
            var data = ntService.SearchId(id);
            if (data.Count > 0)
            {
                return data.ElementAt(0);
            }
            return null;
        }

        // POST api/note
        public Note Post(Note note)
        {
            if (ntService.Insert(note))
            {
                return note;
            }
            return null;
        }

        // PUT api/note/5
        public Note Put(int id, Note newNote)
        {
            newNote.BusinessPlanId = id;
            if (ntService.SearchId(id).Count > 0)
            {
                if (ntService.Edit(newNote))
                {
                    return newNote;
                }
            }
            return null;
        }

        // DELETE api/note/5
        public Note Delete(int id)
        {
            Note oldNote = new Note();
            var data = ntService.SearchId(id);
            if (data.Count > 0)
            {
                oldNote.SetNote(data.ElementAt(0));
                if (ntService.DeleteId(id))
                {
                    return oldNote;
                }
            }
            return null;
        }
    }
}
