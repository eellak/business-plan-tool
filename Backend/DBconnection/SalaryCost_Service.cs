using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;
using Models;


namespace DBconnection
{
    class SalaryCost_Service
    {
        private string connString = Program.connString;
        private MySqlConnection connection;
        private MySqlCommand command;
        private string sql = null;
        private MySqlDataReader dataReader;


        public int getSalaryTotalCost()
        {
            sql = "SELECT * FROM employeeSalary";
            int TotalCost = 0;

            connection = new MySqlConnection(connString);
            try
            {

                connection.Open();
                command = new MySqlCommand(sql, connection);
                dataReader = command.ExecuteReader();


                while (dataReader.Read())
                {
                    TotalCost = +dataReader.GetInt32(1);



                }

                dataReader.Close();
                command.Dispose();
                connection.Close();

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());

            }
            return TotalCost;


        }






    }
}
