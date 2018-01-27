using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;
using Models;


namespace DBconnection
{
    public class Identity_Service
    {
        private string connString = Program.connString;
        private MySqlConnection connection;
        private MySqlCommand command;
        private string sql = null;
        private MySqlDataReader dataReader;



        public bool Insert(Identity idnt)
        {
            sql = "INSERT INTO identity (business_plans_bpID, name, date, legalForm, orderOfBusiness) VALUES ('" + idnt.BusinessPlanId + "' , '" + idnt.Name + "' , '" + idnt.Date + "' , '" + idnt.LegalForm + "' , '" + idnt.OrderOfBusiness + "')";
            return EditTable();
        }

        public bool Edit(Identity idnt)
        {
            sql = "UPDATE identity SET business_plans_bpID='" + idnt.BusinessPlanId + "', name='"+idnt.Name+ "', date='"+idnt.Date+"', legalForm='"+idnt.LegalForm+"', orderOfBusiness='"+idnt.OrderOfBusiness+"' where identityID='"+idnt.ID + "'";
            return EditTable();
        }


        public bool DeleteId(int id)
        {
            sql = "DELETE FROM identity WHERE identityID ='" + id + "'";
            return EditTable();
        }



        public List<Identity> ShowAllItems()
        {
            sql = "SELECT * FROM identity";

            return search();
        }


        public List<Identity> SearchId(int id)
        {
            sql = "SELECT * FROM identity WHERE identityID='" + id + "'";
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

    }
}
