using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;
using Models;


namespace DBconnection
{
    public class Faculty_Service
    {
        private string connString = Program.connString;
        private MySqlConnection connection;
        private MySqlCommand command;
        private string sql = null;
        private MySqlDataReader dataReader;



        public bool Insert(Faculty fclt)
        {
            sql = "INSERT INTO faculties (business_plans_bpID, address, usage_2, ownership_type, start_date, m2) VALUES ('" + fclt.BusinessPlanId + "' , '" + fclt.Adress + "' , '" + fclt.Usage + "' , '" + fclt.Ownership_type + "' , '" + fclt.Start_date + "' , '" + fclt.M2 + "')";
            return EditTable();
        }

        public bool Edit(Faculty fclt)
        {
            sql = "UPDATE faculties SET business_plans_bpID='" + fclt.BusinessPlanId + "', address='" + fclt.Adress + "', usage_2='" + fclt.Usage + "', ownership_type='" + fclt.Ownership_type + "', start_date='" + fclt.Start_date + "', m2='" + fclt.M2 + "' WHERE facultyID='"+fclt.ID + "'";
            return EditTable();
        }


        public bool DeleteId(int id)
        {
            sql = "DELETE FROM faculties WHERE facultyID='" + id + "'";
            return EditTable();
        }



        public List<Faculty> ShowAllItems()
        {
            sql = "SELECT * FROM faculties";
            return search();
        }


        public List<Faculty> SearchId(int id)
        {
            sql = "SELECT * FROM faculties WHERE facultyID='" + id + "'";
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




        private List<Faculty> search()
        {
            List<Faculty> list = new List<Faculty>();
            connection = new MySqlConnection(connString);
            try
            {

                connection.Open();
                command = new MySqlCommand(sql, connection);
                dataReader = command.ExecuteReader();
                while (dataReader.Read())
                {
                    Faculty fclt = new Faculty();
                    fclt.ID = dataReader.GetInt32(0);
                    fclt.BusinessPlanId = dataReader.GetInt32(1);
                    fclt.Adress = dataReader.GetString(2);
                    fclt.Usage = dataReader.GetString(3);
                    fclt.Ownership_type = dataReader.GetString(4);
                    fclt.Start_date = dataReader.GetInt32(5);
                    fclt.M2 = dataReader.GetInt32(6);
                    list.Add(fclt);
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
