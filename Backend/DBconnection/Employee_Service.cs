using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;
using Models;


namespace DBconnection
{
    public class Employee_Service
    {
        private string connString = Program.connString;
        private MySqlConnection connection;
        private MySqlCommand command;
        private string sql = null;
        private MySqlDataReader dataReader;


        public bool Insert(Employee emp)
        {
            sql = "INSERT INTO team_employees (business_plans_bpID , job) VALUES ('" + emp.BusinessPlanId + "' , '" + emp.Job + "')";
            return EditTable();
        }

        public bool Edit(Employee emp)
        {
            sql = "UPDATE team_employees SET business_plans_bpID='" + emp.BusinessPlanId + "',job='" + emp.Job + "' WHERE employeeID='"+emp.ID + "'";
            return EditTable();
        }


        public bool DeleteId(int id)
        {
            sql = "DELETE FROM team_employees WHERE employeeID ='" + id + "'";
            return EditTable();
        }
       


        public List<Employee> ShowAllItems()
        {
            sql = "SELECT * FROM team_employees";
            return search();
        }


        public List<Employee> SearchId(int id)
        {
            sql = "SELECT * FROM team_employees WHERE employeeID ='" + id + "'";
            return search();
        }








        private bool EditTable()
        {
            connection = new MySqlConnection(connString);
            try
            {
                connection.Open();
                command = new MySqlCommand(sql, connection);
                command.ExecuteReader();
                command.Dispose();
                connection.Close();
                return true;
            }
            catch (Exception ex)
            {
                return false; 

            }

        }




        private List<Employee> search()
        {
            List<Employee> list = new List<Employee>();
            connection = new MySqlConnection(connString);
            try
            {

                connection.Open();
                command = new MySqlCommand(sql, connection);
                dataReader = command.ExecuteReader();
                while (dataReader.Read())
                {
                    Employee emp = new Employee();
                    emp.ID = dataReader.GetInt32(0);
                    emp.BusinessPlanId = dataReader.GetInt32(1);
                    emp.Job = dataReader.GetString(2);
                    list.Add(emp);
                }
                dataReader.Close();
                command.Dispose();
                connection.Close();

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());

            }

            return list;
        }

    }
}
