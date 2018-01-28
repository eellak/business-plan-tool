using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Models;
using DBconnection;

namespace ContactManager.Controllers
{
    public class FacultyController : ApiController
    {
        // GET api/faculty
        private Faculty_Service fcltService;

        public FacultyController()
        {
            this.fcltService = new Faculty_Service();
        }

        public Faculty[] Get()
        {
            return fcltService.ShowAllItems().ToArray();
        }

        // GET api/faculty/5
        public Faculty Get(int id)
        {
            var data = fcltService.SearchId(id);
            if (data.Count > 0)
            {
                return data.ElementAt(0);
            }
            return null;
        }

        // POST api/faculty
        public Faculty Post(Faculty faculty)
        {
            if (fcltService.Insert(faculty))
            {
                faculty.ID = Program.GetLastId();
                return faculty;
            }
            return null;
        }

        // PUT api/faculty/5
        public Faculty Put(int id, Faculty newFaculty)
        {
            newFaculty.ID = id;
            if (fcltService.SearchId(id).Count > 0)
            {
                if (fcltService.Edit(newFaculty))
                {
                    return newFaculty;
                }
            }
            return null;
        }

        // DELETE api/faculty/5
        public Faculty Delete(int id)
        {
            Faculty oldFaculty = new Faculty();
            var data = fcltService.SearchId(id);
            if (data.Count > 0)
            {
                oldFaculty = data.ElementAt(0);
                if (fcltService.DeleteId(id))
                {
                    return oldFaculty;
                }
            }
            return null;
        }
    }
}
