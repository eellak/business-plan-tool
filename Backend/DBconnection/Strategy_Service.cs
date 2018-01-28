using System;
using System.Collections.Generic;
using Models;
using MySql.Data.MySqlClient;


namespace DBconnection
{
    public class Strategy_Service
    {
        private string connString = Program.connString;
        private MySqlConnection connection;
        private MySqlCommand command;
        private string sql = null;
        private MySqlDataReader dataReader;



        public bool Insert(Strategy stra)
        {
            sql = "INSERT INTO strategy (business_plans_bpID,promotion, contribution, marketEntry,publicRelations,avoid) VALUES ('" + stra.BusinessPlanId + "' ,'" + stra.Promotion + "' , '" + stra.Contribution + "' , '" + stra.MarketEntry + "' , '" + stra.PublicRelations + "', '" + stra.Avoid + "'   )";
            return EditTable();
        }

        public bool Edit(Strategy stra)
        {
            sql = "UPDATE strategy SET business_plans_bpID='" + stra.BusinessPlanId + "',promotion='" + stra.Promotion + "', contribution='" + stra.Contribution + "', marketEntry='" + stra.MarketEntry + "',publicRelations='" + stra.PublicRelations + "',avoid='" + stra.Avoid + "' WHERE business_plans_bpID='" + stra.BusinessPlanId + "'";
            return EditTable();
        }


        public bool DeleteId(int id)
        {
            sql = "DELETE FROM strategy WHERE business_plans_bpID ='" + id + "'";
            return EditTable();
        }



        public List<Strategy> ShowAllItems()
        {
            sql = "SELECT * FROM strategy";
            return search();
        }


        public List<Strategy> SearchId(int id)
        {
            sql = "SELECT * FROM strategy WHERE business_plans_bpID ='" + id + "'";
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




        private List<Strategy> search()
        {
            List<Strategy> list = new List<Strategy>();
            connection = new MySqlConnection(connString);
            try
            {

                connection.Open();
                command = new MySqlCommand(sql, connection);
                dataReader = command.ExecuteReader();
                while (dataReader.Read())
                {
                    Strategy stra = new Strategy();
                    stra.BusinessPlanId = dataReader.GetInt32(0);
                    stra.Promotion = dataReader.GetString(1);
                    stra.Contribution= dataReader.GetString(2);
                    stra.MarketEntry = dataReader.GetString(3);
                    stra.PublicRelations = dataReader.GetString(4);
                    stra.Avoid = dataReader.GetString(5);
                    list.Add(stra);
                }
                dataReader.Close();
                command.Dispose();
                connection.Close();

            }
            catch (Exception ex)
            {
                return null;

            }

            return list;
        }

    }
}
