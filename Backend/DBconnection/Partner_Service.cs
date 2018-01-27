using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;
using Models;


namespace DBconnection
{
    public class Partner_Service
    {
        private string connString = Program.connString;
        private MySqlConnection connection;
        private MySqlCommand command;
        private string sql = null;
        private MySqlDataReader dataReader;



        public bool Insert(Partner par)
        {
            sql = "INSERT INTO team_partners (business_plans_bpID,name,surName,expertise,linkedIn,date_from,date_until,duties) VALUES ('" + par.BusinessPlanId + "' ,'" + par.Name + "','" + par.SurName + "' ,'" + par.Expertise + "','" + par.LinkedIn + "','" + par.From + "','" + par.Until + "' ,'" + par.Duties + "' )";
            return EditTable();
        }

        public bool Edit(Partner par)
        {
            sql = "UPDATE team_partners SET business_plans_bpID='" + par.BusinessPlanId + "',name='" + par.Name + "',surName='" + par.SurName + "',expertise='" + par.Expertise + "',linkedIn='" + par.LinkedIn + "',date_form='" + par.From + "',date_until='" + par.Until + "',duties='" + par.Duties + "' WHERE partnerID='"+par.ID + "'";
            return EditTable();
        }


        public bool DeleteId(int id)
        {
            sql = "DELETE FROM team_partners WHERE partnerID='" + id + "'";
            return EditTable();
        }



        public List<Partner> ShowAllItems()
        {
            sql = "SELECT * FROM team_partners";
            return search();
        }


        public List<Partner> SearchId(int id)
        {
            sql = "SELECT * FROM team_partners WHERE partnerID ='" + id + "'";
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




        private List<Partner> search()
        {
            List<Partner> list = new List<Partner>();
            connection = new MySqlConnection(connString);
            try
            {

                connection.Open();
                command = new MySqlCommand(sql, connection);
                dataReader = command.ExecuteReader();
                while (dataReader.Read())
                {
                    Partner pat = new Partner();
                    pat.ID = dataReader.GetInt32(0);
                    pat.BusinessPlanId = dataReader.GetInt32(1);
                    pat.Name = dataReader.GetString(2);
                    pat.SurName = dataReader.GetString(3);
                    pat.Expertise = dataReader.GetString(4);
                    pat.LinkedIn = dataReader.GetString(5);
                    pat.Until = dataReader.GetInt32(6);
                    pat.From = dataReader.GetInt32(7);
                    pat.Duties = dataReader.GetString(8);
                    list.Add(pat);
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
