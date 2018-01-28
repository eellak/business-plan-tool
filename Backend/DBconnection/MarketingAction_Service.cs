using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;
using MySql.Data.MySqlClient;


namespace DBconnection
{
    public class MarketingAction_Service
    {
        private string connString = Program.connString;
        private MySqlConnection connection;
        private MySqlCommand command;
        private string sql = null;
        private MySqlDataReader dataReader;



        public bool Insert(MarketingAction mnga)
        {
            sql = "INSERT INTO marketing (business_plans_bpID, title, implementation,frequency,implementationCost,totalCost) VALUES ('" + mnga.BusinessPlanId + "' , '" + mnga.Title + "' , '" + mnga.ImplementationTime + "' , '" + mnga.Frequency + "', '" + mnga.ImplementationCost + "', '" + mnga.TotalCost + "'   )";
            return EditTable();
        }

        public bool Edit(MarketingAction mnga)
        {
            sql = "UPDATE marketing SET business_plans_bpID='" + mnga.BusinessPlanId + "', title='" + mnga.Title + "', implementation='" + mnga.ImplementationTime + "',frequency='" + mnga.Frequency + "',implementationCost='" + mnga.ImplementationCost + "',totalCost='" + mnga.TotalCost + "' WHERE marketing_actionID='"+mnga.ID + "'";
            return EditTable();
        }


        public bool DeleteId(int id)
        {
            sql = "DELETE FROM marketing WHERE marketing_actionID ='" + id + "'";
            return EditTable();
        }



        public List<MarketingAction> ShowAllItems()
        {
            sql = "SELECT * FROM marketing";
            return search();
        }


        public List<MarketingAction> SearchId(int id)
        {
            sql = "SELECT * FROM marketing WHERE marketing_actionID ='" + id + "'";
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




        private List<MarketingAction> search()
        {
            List<MarketingAction> list = new List<MarketingAction>();
            connection = new MySqlConnection(connString);
            try
            {

                connection.Open();
                command = new MySqlCommand(sql, connection);
                dataReader = command.ExecuteReader();
                while (dataReader.Read())
                {
                    MarketingAction mnga = new MarketingAction();
                    mnga.BusinessPlanId = dataReader.GetInt32(1);
                    mnga.ID = dataReader.GetInt32(0);
                    mnga.Title = dataReader.GetString(2);
                    mnga.ImplementationCost = dataReader.GetInt32(3);
                    mnga.Frequency = dataReader.GetInt32(4);
                    mnga.ImplementationTime = dataReader.GetInt32(5);
                    mnga.TotalCost = dataReader.GetString(6);
                    list.Add(mnga);
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
