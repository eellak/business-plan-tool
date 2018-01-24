using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;
using Models;


namespace DBconnection
{
    public class Function_Service
    {
        private string connString = Program.connString;
        private MySqlConnection connection;
        private MySqlCommand command;
        private string sql = null;
        private MySqlDataReader dataReader;



        public bool Insert(Function fnct)
        {
            sql = "INSERT INTO start_functions (business_plans_bpID, name, functionCost) VALUES ('" + fnct.BusinessPlanId + "' , '" + fnct.Name + "' , '" + fnct.FunctionCost + "' )";
            return EditTable();
        }

        public bool Edit(Function fnct)
        {
            sql = "UPDATE start_functions SET business_plans_bpID='" + fnct.BusinessPlanId + "', name='" + fnct.Name + "', functionCost='" + fnct.FunctionCost + "' WHERE functionID='"+fnct.ID+"'";
            return EditTable();
        }


        public bool DeleteId(int id)
        {
            sql = "DELETE FROM start_functions WHERE functionID ='" + id + "'";
            return EditTable();
        }



        public List<Function> ShowAllItems()
        {
            sql = "SELECT * FROM start_functions";
            return search();
        }


        public List<Function> SearchId(int id)
        {
            sql = "SELECT * FROM start_functions WHERE functionID ='" + id + "'";
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




        private List<Function> search()
        {
            List<Function> list = new List<Function>();
            connection = new MySqlConnection(connString);
            try
            {

                connection.Open();
                command = new MySqlCommand(sql, connection);
                dataReader = command.ExecuteReader();
                while (dataReader.Read())
                {
                    Function fnct = new Function();
                    fnct.ID = dataReader.GetInt32(0);
                    fnct.BusinessPlanId = dataReader.GetInt32(1);
                    fnct.Name = dataReader.GetString(2);
                    fnct.FunctionCost = dataReader.GetInt32(3);
                    list.Add(fnct);
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
