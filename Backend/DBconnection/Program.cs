using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;
using Models;



namespace DBconnection
{
    public class Program
    {
        public static String connString = "Server=localhost;Database=businessplantool;Uid=root;Pwd=12345;";

        public static int GetLastId()
        {
            string sql= "select last_insert_id()";
            int result = -1;
            MySqlConnection connection = new MySqlConnection(connString);
            try
            {
                connection.Open();
                MySqlCommand command = new MySqlCommand(sql, connection);
                MySqlDataReader reader=command.ExecuteReader();
                while (reader.Read())
                {
                    result = reader.GetInt32(0);
                }
                command.Dispose();
                connection.Close();
                return result;
            }
            catch(Exception ex)
            {
                return -2;
            }

        }
    }
}
