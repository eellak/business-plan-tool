using System;
using System.Collections.Generic;
using Models;
using MySql.Data.MySqlClient;

namespace DBconnection
{
    public class Note_Service
    {
        private string connString = Program.connString;
        private MySqlConnection connection;
        private MySqlCommand command;
        private string sql = null;
        private MySqlDataReader dataReader;



        public bool Insert(Note nt)
        {
            sql = "INSERT INTO market_analysis_notes (business_plans_bpID, text) VALUES ('" + nt.BusinessPlanId + "' ,'" + nt.Text+ "'   )";
            return EditTable();
        }

        public bool Edit(Note nt)
        {
            sql = "UPDATE market_analysis_notes SET business_plans_bpID='" + nt.BusinessPlanId + "', text='" + nt.Text + "' WHERE business_plans_bpID='"+nt.BusinessPlanId+"'";
            return EditTable();
        }


        public bool DeleteId(int id)
        {
            sql = "DELETE FROM market_analysis_notes WHERE business_plans_bpID='" + id + "'";
            return EditTable();
        }



        public List<Note> ShowAllItems()
        {
            sql = "SELECT * FROM market_analysis_notes";
            return search();
        }


        public List<Note> SearchId(int id)
        {
            sql = "SELECT * FROM market_analysis_notes WHERE business_plans_bpID ='" + id + "'";
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




        private List<Note> search()
        {
            List<Note> list = new List<Note>();
            connection = new MySqlConnection(connString);
            try
            {

                connection.Open();
                command = new MySqlCommand(sql, connection);
                dataReader = command.ExecuteReader();
                while (dataReader.Read())
                {
                    Note nt = new Note();
                    nt.BusinessPlanId = dataReader.GetInt32(0);
                    nt.Text = dataReader.GetString(1);
                    list.Add(nt);
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
