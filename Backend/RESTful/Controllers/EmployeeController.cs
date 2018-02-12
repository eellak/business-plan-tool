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
    public class EmployeeController : ApiController
    {
        // GET api/employee
        Employee_Service empService;

        public EmployeeController()
        {
            this.empService = new Employee_Service();
        }

        public Employee[] Get()
        {
            return empService.ShowAllItems().ToArray();
        }

        // GET api/employee/5
        public Employee Get(int id)
        {
            var data = empService.SearchId(id);
            if (data.Count > 0)
            {
                return data.ElementAt(0);
            }
            return null;
        }

        // POST api/employee
        public Employee Post(Employee employee)
        {
            if (empService.Insert(employee))
            {
                employee.ID = Program.GetLastId();
                return employee;
            }
            return null;
        }

        // PUT api/employee/5
        public Employee Put(int id, Employee newEmployee)
        {
            newEmployee.ID = id;
            if (empService.SearchId(id).Count > 0)
            {
                if (empService.Edit(newEmployee))
                {
                    return newEmployee;
                }
            }
            return null;
        }

        // DELETE api/employee/5
        public Employee Delete(int id)
        {
            Employee oldEmployee = new Employee();
            var data = empService.SearchId(id);
            if (data.Count > 0)
            {
                oldEmployee = data.ElementAt(0);
                if (empService.DeleteId(id))
                    return oldEmployee;
            }
            return null;
        }
    }
}
