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
    public class EmployeeSalaryController : ApiController
    {
        // GET api/employeesalary
        private EmployeeSalary_Service emplslrService;

        public EmployeeSalaryController()
        {
            this.emplslrService = new EmployeeSalary_Service();
        }

        public EmployeeSalary[] Get()
        {
            return emplslrService.ShowAllItems().ToArray();
        }

        // GET api/employeesalary/5
        public EmployeeSalary Get(int id)
        {
            var data = emplslrService.SearchId(id);
            if (data.Count > 0)
            {
                return data.ElementAt(0);
            }
            return null;
        }

        // POST api/employeesalary
        public EmployeeSalary Post(EmployeeSalary emplSlr)
        {
            if (emplslrService.Insert(emplSlr))
            {
                return emplSlr;
            }
            return null;
        }

        // PUT api/employeesalary/5
        public EmployeeSalary Put(int id, EmployeeSalary newEmployeeSalary)
        {
            if (emplslrService.SearchId(id).Count > 0)
            {
                if (emplslrService.Edit(newEmployeeSalary))
                {
                    return newEmployeeSalary;
                }
            }
            return null;
        }

        // DELETE api/employeesalary/5
        public EmployeeSalary Delete(int id)
        {
            EmployeeSalary oldEmployeeSalary = new EmployeeSalary();
            var data = emplslrService.SearchId(id);
            if (data.Count > 0)
            {
                oldEmployeeSalary.SetEmployeeSalary(data.ElementAt(0));
                if (emplslrService.DeleteId(id))
                {
                    return oldEmployeeSalary;
                }
            }
            return null;
        }
    }
}
