using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;
using Models;


namespace DBconnection
{
    public class Deadspot_Service
    {
        private string connString = Program.connString;
        private MySqlConnection connection;
        private MySqlCommand command;
        private string sql = null;
        private MySqlDataReader dataReader;



        public bool Insert(Deadspot dspt)
        {
            sql = "INSERT INTO deadspots (Products_productID,business_plans_bpID,deadSpot) VALUES ('" + dspt.ProductID + "'  , '" + dspt.BusinessPlanId + "' , '" + dspt.Spot + "')";
            return EditTable();
        }

        public bool Edit(Deadspot dspt)
        {
            sql = "UPDATE deadspots SET Products_productID='"+dspt.ProductID + "',business_plans_bpID='"+dspt.BusinessPlanId+"',deadSpot='"+dspt.Spot+"' WHERE Products_productID='" + dspt.ProductID + "' AND business_plans_bpID='"+dspt.BusinessPlanId+"'";
            return EditTable();
        }


        public bool DeleteId(int id)
        {
            sql = "DELETE FROM deadspots WHERE Products_productID ='" + id + "'";
            return EditTable();
        }



        public List<Deadspot> ShowAllItems()
        {
            sql = "SELECT * FROM deadspots";
            return search();
        }


        public List<Deadspot> SearchId(int id)
        {
            sql = "SELECT * FROM deadspots WHERE Products_productID ='" + id + "'";
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




        private List<Deadspot> search()
        {
            List<Deadspot> list = new List<Deadspot>();
            connection = new MySqlConnection(connString);
            try
            {

                connection.Open();
                command = new MySqlCommand(sql, connection);
                dataReader = command.ExecuteReader();
                while (dataReader.Read())
                {
                    Deadspot dspt = new Deadspot();
                    dspt.ProductID = dataReader.GetInt32(0);
                    dspt.BusinessPlanId = dataReader.GetInt32(1);
                    dspt.Spot = dataReader.GetString(2);
                    list.Add(dspt);
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
