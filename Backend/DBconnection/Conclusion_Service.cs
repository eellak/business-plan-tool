using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;
using Models;


namespace DBconnection
{
    public class Conclusion_Service
    {
        private string connString = Program.connString;
        private MySqlConnection connection;
        private MySqlCommand command;
        private string sql = null;
        private MySqlDataReader dataReader;


        public bool Insert(Conclusion cncl)
        {
            sql = "INSERT INTO conclusion (business_plans_bpID, text) VALUES ('" + cncl.BussinesPlanId + "' , '" + cncl.Text + "')";
            return EditTable();
        }

        public bool Edit(Conclusion cncl)
        {
            sql = "UPDATE conclusion SET business_plans_bpID='" + cncl.BussinesPlanId + "', text='" + cncl.Text + "' WHERE business_plans_bpID='" + cncl.BussinesPlanId + "'";
            return EditTable();
        }


        public bool DeleteId(int id)
        {
            sql = "DELETE FROM conclusion WHERE business_plans_bpID ='" + id + "'";
            return EditTable();
        }



        public List<Conclusion> ShowAllItems()
        {
            sql = "SELECT * FROM conclusion";
            return search();
        }


        public List<Conclusion> SearchId(int id)
        {
            sql = "SELECT * FROM conclusion WHERE business_plans_bpID ='" + id + "'";
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




        private List<Conclusion> search()
        {
            List<Conclusion> list = new List<Conclusion>();
            connection = new MySqlConnection(connString);
            try
            {

                connection.Open();
                command = new MySqlCommand(sql, connection);
                dataReader = command.ExecuteReader();
                while (dataReader.Read())
                {
                    Conclusion cncl = new Conclusion();
                    cncl.BussinesPlanId = dataReader.GetInt32(0);
                    cncl.Text = dataReader.GetString(1);
                    list.Add(cncl);
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
