using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;
using MySql.Data.MySqlClient;


namespace DBconnection
{
    public class StartAction_Service
    {
        private string connString = Program.connString;
        private MySqlConnection connection;
        private MySqlCommand command;
        private string sql = null;
        private MySqlDataReader dataReader;



        public bool Insert(StartAction sact)
        {
            sql = "INSERT INTO start_actions (business_plans_bpID, name,actionCost) VALUES ('" + sact.BusinessPlanId + "' , '" + sact.Name + "' , '" + sact.ActionCost + "'    )";
            return EditTable();
        }

        public bool Edit(StartAction sact)
        {
            sql = "UPDATE start_actions SET business_plans_bpID='"+sact.BusinessPlanId+"', name='"+sact.Name+"',actionCost='"+sact.ActionCost+ "' WHERE actionID='" + sact.ID + "'";
            return EditTable();
        }


        public bool DeleteId(int id)
        {
            sql = "DELETE FROM start_actions WHERE actionID ='" + id + "'";
            return EditTable();
        }



        public List<StartAction> ShowAllItems()
        {
            sql = "SELECT * FROM start_actions";
            return search();
        }


        public List<StartAction> SearchId(int id)
        {
            sql = "SELECT * FROM Start_Actions WHERE actionID ='" + id + "'";
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




        private List<StartAction> search()
        {
            List<StartAction> list = new List<StartAction>();
            connection = new MySqlConnection(connString);
            try
            {

                connection.Open();
                command = new MySqlCommand(sql, connection);
                dataReader = command.ExecuteReader();
                while (dataReader.Read())
                {
                    StartAction sact = new StartAction();
                    sact.ID= dataReader.GetInt32(0);
                    sact.BusinessPlanId = dataReader.GetInt32(1);
                    sact.Name = dataReader.GetString(2);
                    sact.ActionCost = dataReader.GetInt32(3);
                    list.Add(sact);
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
