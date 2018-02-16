using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;

namespace DBconnection
{
    public class IdentityClient_Service
    {
        private string connString = Program.connString;
        private MySqlConnection connection;
        private MySqlCommand command;
        private string sql = null;
        private MySqlDataReader dataReader;

        public List<IdentityClient> ShowAllItems()
        {
            sql = "SELECT * FROM identity";
            List<IdentityClient> idnClients = new List<IdentityClient>();
            var Identities = search();
            foreach (Identity identity in Identities)
            {
                IdentityClient idntClient = new IdentityClient();
                idntClient.ID = identity.ID;
                idntClient.BusinessPlanId = identity.BusinessPlanId;
                idntClient.Name = identity.Name;
                idntClient.Date = identity.Date;
                idntClient.LegalForm = identity.LegalForm;
                idntClient.OrderOfBusiness = identity.OrderOfBusiness;
                idnClients.Add(idntClient);
            }
            sql = "SELECT * FROM identity_clients";
            List<Client> clients = new List<Client>();
            clients.AddRange(searchClients());
            foreach(IdentityClient idntClient in idnClients)
            {
                foreach(Client client in clients)
                {
                    if (idntClient.ID == client.IdentityId)
                    {
                        idntClient.Clients.Add(client);
                    }
                }
            }
            return idnClients;
        }

        private List<Identity> search()
        {
            List<Identity> list = new List<Identity>();
            connection = new MySqlConnection(connString);
            try
            {

                connection.Open();
                command = new MySqlCommand(sql, connection);
                dataReader = command.ExecuteReader();


                while (dataReader.Read())
                {
                    Identity idnt = new Identity();
                    idnt.ID = dataReader.GetInt32(0);
                    idnt.BusinessPlanId = dataReader.GetInt32(1);
                    idnt.Name = dataReader.GetString(2);
                    idnt.Date = dataReader.GetInt32(3);
                    idnt.LegalForm = dataReader.GetString(4);
                    idnt.OrderOfBusiness = dataReader.GetString(5);
                    list.Add(idnt);

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

        private List<Client> searchClients()
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
                return null;

            }

            return list;
        }

    }
}
