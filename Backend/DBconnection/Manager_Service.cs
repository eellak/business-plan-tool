using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;
using MySql.Data.MySqlClient;


namespace DBconnection
{
    public class Manager_Service
    {
        private string connString = Program.connString;
        private MySqlConnection connection;
        private MySqlCommand command;
        private string sql = null;
        private MySqlDataReader dataReader;



        public bool Insert(Manager mng)
        {
            sql = "INSERT INTO team_managers (business_plans_bpID, name, surname,job,linkedIn) VALUES ('" + mng.BusinessPlanId + "' , '" + mng.Name + "' , '" + mng.Surname+ "' , '" + mng.Job + "', '" + mng.LinkedIn + "'  )";
            return EditTable();
        }

        public bool Edit(Manager mng)
        {
            sql = "UPDATE team_managers SET business_plans_bpID='" + mng.BusinessPlanId + "',name='" + mng.Name + "',surename='"+mng.Surname+ "',job='"+mng.Job+ "',linkedIn='"+mng.LinkedIn+ "' WHERE managerID='"+mng.ID + "'";
            return EditTable();
        }


        public bool DeleteId(int id)
        {
            sql = "DELETE FROM team_managers WHERE managerID ='" + id + "'";
            return EditTable();
        }



        public List<Manager> ShowAllItems()
        {
            sql = "SELECT * FROM team_managers";
            return search();
        }


        public List<Manager> SearchId(int id)
        {
            sql = "SELECT * FROM team_managers WHERE managerID ='" + id + "'";
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




        private List<Manager> search()
        {
            List<Manager> list = new List<Manager>();
            connection = new MySqlConnection(connString);
            try
            {

                connection.Open();
                command = new MySqlCommand(sql, connection);
                dataReader = command.ExecuteReader();
                Manager mng = new Manager();

                while (dataReader.Read())
                {
                    mng.ID = dataReader.GetInt32(0);
                    mng.BusinessPlanId = dataReader.GetInt32(1);
                    mng.Name = dataReader.GetString(2);
                    mng.Surname = dataReader.GetString(3);
                    mng.Job = dataReader.GetString(4);
                    mng.LinkedIn = dataReader.GetString(5);



                }
                list.Add(mng);
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
