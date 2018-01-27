using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;
using MySql.Data.MySqlClient;

namespace DBconnection
{
    public class Swot_Service
    {
        private string connString = Program.connString;
        private MySqlConnection connection;
        private MySqlCommand command;
        private string sql = null;
        private MySqlDataReader dataReader;

        public bool Insert(SWOT swot)
        {
            bool output = true;
            foreach(string strong in swot.Strong)
            {
                sql = "INSERT INTO swot (business_plans_bpID,swotType,text) VALUES ('"+swot.BusinessPlanId+"','1', '"+strong+ "' )";
                if (!EditTable())
                {
                    output = false;
                }
                
            }
            foreach (string weak in swot.Weak)
            {
                sql = "INSERT INTO swot (business_plans_bpID,swotType,text) VALUES ('" + swot.BusinessPlanId + "','2', '" + weak + "' )";
                if (!EditTable())
                {
                    output = false;
                }

            }
            foreach (string opportunity in swot.Opportunities)
            {
                sql = "INSERT INTO swot (business_plans_bpID,swotType,text) VALUES ('" + swot.BusinessPlanId + "','3', '" + opportunity + "' )";
                if (!EditTable())
                {
                    output = false;
                }

            }
            foreach (string threat in swot.Threats)
            {
                sql = "INSERT INTO swot (business_plans_bpID,swotType,text) VALUES ('" + swot.BusinessPlanId + "','4', '" + threat + "' )";
                if (!EditTable())
                {
                    output = false;
                }

            }
            return output;

        }

        public bool Edit(SWOT swot)
        {
            bool output = true;

            if (swot.Strong.Count > 0)
            {
                if (!DeleteType(1, swot.BusinessPlanId))
                {
                    output = false;
                }
            }
            if (swot.Weak.Count > 0)
            {
                if (!DeleteType(2, swot.BusinessPlanId))
                {
                    output = false;
                }
            }
            if (swot.Opportunities.Count > 0)
            {
                if (!DeleteType(3, swot.BusinessPlanId))
                {
                    output = false;
                }
            }
            if (swot.Threats.Count > 0)
            {
                if (!DeleteType(4, swot.BusinessPlanId))
                {
                    output = false;
                }
            }

            return Insert(swot)&&output;
        }

        public bool DeleteId(int id)
        {
            sql = "DELETE FROM swot WHERE business_plans_bpID='" + id + "'";
            return EditTable();
        }

        private bool DeleteType(int type, int id)
        {
            sql = "DELETE FROM swot WHERE swotType='" + type + "' AND business_plans_bpID='" + id + "'";
            return EditTable();
        }

        public List<SWOT> ShowAllItems()
        {
            sql = "SELECT * FROM swot";
            return search();
        }


        public List<SWOT> SearchId(int id)
        {
            sql = "SELECT * FROM swot WHERE business_plans_bpID ='" + id + "'";
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
                return true;
            }
            catch (Exception ex)
            {
                return false;

            }

        }

        private List<SWOT> search()
        {
            List<SWOT> list = new List<SWOT>();
            List<SwotRow> rows = new List<SwotRow>();
            List<int> ids = new List<int>();
            connection = new MySqlConnection(connString);
            try
            {

                connection.Open();
                command = new MySqlCommand(sql, connection);
                dataReader = command.ExecuteReader();

                while (dataReader.Read())
                {
                    SwotRow row = new SwotRow();
                    row.BusinessPlanId = dataReader.GetInt32(0);
                    if (!ids.Contains(row.BusinessPlanId))
                    {
                        ids.Add(row.BusinessPlanId);

                    }
                    row.type = dataReader.GetInt32(1);
                    row.typeValue = dataReader.GetString(2);
                    rows.Add(row);
                }
                dataReader.Close();
                command.Dispose();
                connection.Close();
                foreach (int id in ids)
                {
                    SWOT swot = new SWOT();
                    foreach (SwotRow row in rows)
                    {
                        if (row.BusinessPlanId== id && row.type == 1)
                        {
                            swot.Strong.Add(row.typeValue);
                        }
                        if (row.BusinessPlanId == id && row.type == 2)
                        {
                            swot.Weak.Add(row.typeValue);
                        }
                        if (row.BusinessPlanId == id && row.type == 3)
                        {
                            swot.Opportunities.Add(row.typeValue);
                        }
                        if (row.BusinessPlanId == id && row.type == 4)
                        {
                            swot.Threats.Add(row.typeValue);
                        }
                    }
                    swot.BusinessPlanId = id;
                    list.Add(swot);
                }

            }
            catch (Exception ex)
            {
                return null;

            }

            return list;
        }
    }
}
