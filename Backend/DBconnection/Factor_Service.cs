using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;
using Models;


namespace DBconnection
{
    public class Factor_Service
    {
        private string connString = Program.connString;
        private MySqlConnection connection;
        private MySqlCommand command;
        private string sql = null;
        private MySqlDataReader dataReader;



        public bool Insert(Factor fct)
        {
          sql = "INSERT INTO pestel (business_plans_bpID, factorID, description, example) VALUES ('" + fct.BusinessPlanId + "', '" + fct.ID + "', '" + fct.Description + "' , '" + fct.Example + "')";
          return EditTable();
        }

        public bool Edit(int id, Factor fct)
        {
            sql = "UPDATE pestel SET business_plans_bpID='" + id + "', description='" + fct.Description + "',example='" + fct.Example + "' WHERE factorID='" + fct.ID + "' AND business_plans_bpID='" + fct.BusinessPlanId + "'";
            return EditTable();
        }


        public bool DeleteId(int businessPlanId,int factorId)
        {
            sql = "DELETE FROM pestel WHERE business_plans_bpID='" + businessPlanId + "' AND factorID ='" + factorId + "'";
            return EditTable();
        }


        public bool DeleteId(int businessPlanId)
        {
            sql = "DELETE FROM pestel WHERE business_plans_bpID='" + businessPlanId + "'";
            return EditTable();
        }


        public List<Factor> ShowAllItems()
        {
            sql = "SELECT * FROM pestel";
            return search();
        }


        public List<Factor> SearchId(int id)
        {
            sql = "SELECT * FROM pestel WHERE business_plans_bpID='" + id + "' ORDER BY factorID";
            return search();
        }

        public List<Factor> SearchFactor(int businessPlanId, int factorId)
        {
            sql = "SELECT * FROM pestel WHERE business_plans_bpID='" + businessPlanId + "' AND factorID='"+ factorId +"'";
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




        private List<Factor> search()
        {
            List<Factor> list = new List<Factor>();
            connection = new MySqlConnection(connString);
            try
            {

                connection.Open();
                command = new MySqlCommand(sql, connection);
                dataReader = command.ExecuteReader();
                while (dataReader.Read())
                {
                    Factor fct = new Factor();
                    fct.ID = dataReader.GetInt32(0);
                    fct.BusinessPlanId = dataReader.GetInt32(1);
                    fct.Description = dataReader.GetString(2);
                    fct.Example = dataReader.GetString(3);
                    list.Add(fct);
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
