using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;
using Models;


namespace DBconnection
{
    public class EmployeeSalary_Service
    {
        private string connString = Program.connString;
        private MySqlConnection connection;
        private MySqlCommand command;
        private string sql = null;
        private MySqlDataReader dataReader;



        public bool Insert(EmployeeSalary empslr)
        {
            sql = "INSERT INTO employeessalary (team_employees_employeeID, salary, bonus, employment_type) VALUES ('" + empslr.EmployeeID + "' , '" + empslr.Salary + "' , '" + empslr.Bonus + "' , '" + empslr.Employment_type + "')";
            return EditTable();
        }

        public bool Edit(EmployeeSalary empslr)
        {
            sql = "UPDATE employeessalary SET team_employees_employeeID='" + empslr.EmployeeID + "',salary='" + empslr.Salary + "',bonus='" + empslr.Bonus + "',employment_type='" + empslr.Employment_type + "' WHERE team_employees_employeeID='"+empslr.EmployeeID+"'";
            return EditTable();
        }


        public bool DeleteId(int id)
        {
            sql = "DELETE FROM employeessalary WHERE team_employees_employeeID='" + id + "'";
            return EditTable();
        }



        public List<EmployeeSalary> ShowAllItems()
        {
            sql = "SELECT * FROM employeessalary";
            return search();
        }


        public List<EmployeeSalary> SearchId(int id)
        {
            sql = "SELECT * FROM employeessalary WHERE team_employees_employeeID='" + id + "'";
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




        private List<EmployeeSalary> search()
        {
            List<EmployeeSalary> list = new List<EmployeeSalary>();
            connection = new MySqlConnection(connString);
            try
            {

                connection.Open();
                command = new MySqlCommand(sql, connection);
                dataReader = command.ExecuteReader();
                while (dataReader.Read())
                {
                    EmployeeSalary empslr = new EmployeeSalary();
                    empslr.EmployeeID = dataReader.GetInt32(0);
                    empslr.Salary = dataReader.GetInt32(1);
                    empslr.Bonus = dataReader.GetInt32(2);
                    empslr.Employment_type = dataReader.GetString(3);
                    list.Add(empslr);
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
