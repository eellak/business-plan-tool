using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;
using Models;


namespace DBconnection
{
    class Income_Service
    {
        private string connString = Program.connString;
        private MySqlConnection connection;
        private MySqlCommand command;
        private string sql = null;
        private MySqlDataReader dataReader;



        /*part of the old JSon that got merged into Product
         * public void Insert(Income inc)
        {
            sql = "INSERT INTO employeesSalary (team_employees_employeeID, salary, bonus, employment_type) VALUES ('" + inc.ID + "' , '" + inc.Name + "' , '" + inc.FunctionCost + "' )";
            EditTable();
        }


        public void DeleteId(int id)
        {
            sql = "DELETE FROM employeesSalary WHERE functionID ='" + id + "'";
            EditTable();
        }



        public List<Income> ShowAllItems()
        {
            sql = "SELECT * FROM employeesSalary";
            return search();
        }


        public List<Income> SearchId(int id)
        {
            sql = "SELECT * FROM employeesSalary WHERE functionID ='" + id + "'";
            return search();
        }








        public void EditTable()
        {
            connection = new MySqlConnection(connString);
            try
            {
                connection.Open();
                command = new MySqlCommand(sql, connection);
                command.ExecuteReader();
                command.Dispose();
                connection.Close();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());

            }

        }




        public List<Function> search()
        {
            List<Function> list = new List<Function>();
            connection = new MySqlConnection(connString);
            try
            {

                connection.Open();
                command = new MySqlCommand(sql, connection);
                dataReader = command.ExecuteReader();
                Function fnct = new Function();

                while (dataReader.Read())
                {

                    fnct.ID = dataReader.GetInt32(0);
                    fnct.BusinessPlanId = dataReader.GetInt32(1);
                    fnct.Name = dataReader.GetString(2);
                    fnct.FunctionCost = dataReader.GetInt32(3);




                }
                list.Add(fnct);
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
        */
    }
}
