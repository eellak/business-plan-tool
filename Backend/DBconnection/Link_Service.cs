using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;
using Models;


namespace DBconnection
{
    public class Link_Service
    {
        private string connString = Program.connString;
        private MySqlConnection connection;
        private MySqlCommand command;
        private string sql = null;
        private MySqlDataReader dataReader;



        public bool Insert(Link link)
        {
            sql = "INSERT INTO links (business_plans_bpID, URL, title, section) VALUES ('" + link.BusinessPlanId + "' , '" + link.URL + "' , '" + link.Title + "' , '" + link.Section + "')";
            return EditTable();
        }

        public bool Edit(Link link)
        {
            sql = "UPDATE links SET business_plans_bpID='"+link.BusinessPlanId+"', URL='"+link.URL+"', title='"+link.Title+"', section='"+link.Section+"' WHERE linkID='" + link.ID + "'";
            return EditTable();
        }


        public bool DeleteId(int id)
        {
            sql = "DELETE FROM links WHERE linkID ='" + id + "'";
            return EditTable();
        }



        public List<Link> ShowAllItems()
        {
            sql = "SELECT * FROM links";
            return search();
        }


        public List<Link> SearchId(int id)
        {
            sql = "SELECT * FROM links WHERE linkID ='" + id + "'";
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




        private List<Link> search()
        {
            List<Link> list = new List<Link>();
            connection = new MySqlConnection(connString);
            try
            {

                connection.Open();
                command = new MySqlCommand(sql, connection);
                dataReader = command.ExecuteReader();
                while (dataReader.Read())
                {
                    Link link = new Link();
                    link.ID = dataReader.GetInt32(0);
                    link.BusinessPlanId = dataReader.GetInt32(1);
                    link.URL = dataReader.GetString(2);
                    link.Title = dataReader.GetString(3);
                    link.Section = dataReader.GetString(4);
                    list.Add(link);
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
