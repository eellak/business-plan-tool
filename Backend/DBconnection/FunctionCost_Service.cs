using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;
using Models;


namespace DBconnection
{
    public class FunctionCost_Service
    {
        private string connString = Program.connString;
        private MySqlConnection connection;
        private MySqlCommand command;
        private string sql = null;
        private MySqlDataReader dataReader;
        private Function_Service fncService;

        public FunctionCost showAllItems()
        {
            fncService = new Function_Service();
            FunctionCost output = new FunctionCost();
            output.Functions.AddRange(fncService.ShowAllItems());
            output.FunctionsTotalCost = getFunctionTotalCost();
            return output;
        }


        private int getFunctionTotalCost()
        {
            sql = "SELECT * FROM start_functions";
            int TotalCost = 0;
           
            connection = new MySqlConnection(connString);
            try
            {

                connection.Open();
                command = new MySqlCommand(sql, connection);
                dataReader = command.ExecuteReader();
                

                while (dataReader.Read())
                {
                    TotalCost += dataReader.GetInt32(3);
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
