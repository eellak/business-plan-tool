using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;
using Models;


namespace DBconnection
{
    public class Description_Service
    {
        private string connString = Program.connString;
        private MySqlConnection connection;
        private MySqlCommand command;
        private string sql = null;
        private MySqlDataReader dataReader;


        public bool Insert(Description descr)
        {
            sql = "INSERT INTO identity_descriptions (identity_identityID,description_text) VALUES ('" + descr.IdentityId + "' , '" + descr.Text + "')";
            return EditTable();
        }

        public bool Edit(Description descr)
        {
            sql= "UPDATE identity_descriptions SET identity_identityID='"+descr.IdentityId+ "',description_text='"+descr.Text+"' WHERE identityID='"+descr.ID + "'";
            return EditTable();
        }


        public bool DeleteId(int id)
        {
            sql = "DELETE FROM identity_descriptions WHERE identityID ='" + id + "'";
            return EditTable();
        }



        public List<Description> ShowAllItems()
        {
            sql = "SELECT * FROM identity_descriptions";
            return search();
        }


        public List<Description> SearchId(int id)
        {
            sql = "SELECT * FROM identity_descriptions WHERE identityID='" + id + "'";
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




        private List<Description> search()
        {
            List<Description> list = new List<Description>();
            connection = new MySqlConnection(connString);
            try
            {

                connection.Open();
                command = new MySqlCommand(sql, connection);
                dataReader = command.ExecuteReader();
                while (dataReader.Read())
                {
                    Description descr = new Description();
                    descr.ID= dataReader.GetInt32(0);
                    descr.IdentityId = dataReader.GetInt32(1);
                    descr.Text = dataReader.GetString(2);
                    list.Add(descr);
                }
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

    }
}
