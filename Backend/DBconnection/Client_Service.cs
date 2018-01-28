using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;
using Models;


namespace DBconnection
{
    public class Client_Service
    {
        private string connString = Program.connString;
        private MySqlConnection connection;
        private MySqlCommand command;
        private string sql = null;
        private MySqlDataReader dataReader;



       
        public bool Insert(Client client)
        {
            sql = "INSERT INTO identity_clients (identity_identityID , name) VALUES ('" + client.IdentityId + "' , '" + client.Name + "')";
            return EditTable();
        }

        public bool Edit(Client client)
        {
            sql = "UPDATE identity_clients SET identity_identityID='" + client.IdentityId + "',name='" + client.Name + "' WHERE clientID='"+client.ID+ "'";
            return EditTable();
        }


        public bool DeleteId(int id)
        {
            sql = "DELETE FROM identity_clients WHERE clientID='" + id + "'";
            return EditTable();
        }



        public List<Client> ShowAllItems()
        { 
            sql = "SELECT * FROM identity_clients";
            return search();
        }
       

        public List<Client> SearchId(int id)
        {
            sql = "SELECT * FROM identity_clients WHERE clientID='" + id + "'";
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




        private List<Client> search()
        {
            List<Client> list = new List<Client>();
            connection = new MySqlConnection(connString);
            try
            {

                connection.Open();
                command = new MySqlCommand(sql, connection);
                dataReader = command.ExecuteReader();
                while (dataReader.Read())
                {
                    Client client = new Client();
                    client.ID = dataReader.GetInt32(0);
                    client.IdentityId = dataReader.GetInt32(1);
                    client.Name = dataReader.GetString(2);
                    list.Add(client);
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
