using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;
using Models;


namespace DBconnection
{
    public class RunningCost_Service
    {
        private string connString = Program.connString;
        private MySqlConnection connection;
        private MySqlCommand command;
        private string sql = null;
        private MySqlDataReader dataReader;
        private FacultyCost_Service fctCostService;
        private EquipmentCost_Service eqpCostService;

        public RunningCost showAllItems()
        {
            fctCostService = new FacultyCost_Service();
            eqpCostService = new EquipmentCost_Service();
            RunningCost runCost = new RunningCost();
            runCost.FacultyCosts.AddRange(fctCostService.ShowAllItems());
            runCost.EquipmentCosts.AddRange(eqpCostService.ShowAllItems());
            runCost.EquipmentExpenses = getEquipmentExpenses();
            runCost.FacultyExpenses = getFacultyExpenses();
            return runCost;

        }




        private int getFacultyExpenses()
        {
            sql = "SELECT * FROM Faculties_Cost";
            int TotalCost = 0;

            connection = new MySqlConnection(connString);
            try
            {

                connection.Open();
                command = new MySqlCommand(sql, connection);
                dataReader = command.ExecuteReader();


                while (dataReader.Read())
                {
                    TotalCost += dataReader.GetInt32(1);
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


        private int getEquipmentExpenses()
        {
            sql = "SELECT * FROM Equipment_Cost";
            int TotalCost = 0;

            connection = new MySqlConnection(connString);
            try
            {

                connection.Open();
                command = new MySqlCommand(sql, connection);
                dataReader = command.ExecuteReader();


                while (dataReader.Read())
                {
                    TotalCost +=dataReader.GetInt32(1);



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
