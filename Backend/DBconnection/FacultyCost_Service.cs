using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;
using Models;


namespace DBconnection
{
    public class FacultyCost_Service
    {
        private string connString = Program.connString;
        private MySqlConnection connection;
        private MySqlCommand command;
        private string sql = null;
        private MySqlDataReader dataReader;



        public bool Insert(FacultyCost fclct)
        {
            sql = "INSERT INTO faculties_cost (Faculties_facultyID, facCost) VALUES ('" + fclct.FacultyId + "' , '" + fclct.Cost + "' )";
            return EditTable();
        }

        public bool Edit(FacultyCost fcltct)
        {
            sql = "UPDATE faculties_cost SET Faculties_facultyID='" + fcltct.FacultyId + "', facCost='" + fcltct.Cost + "' WHERE Faculties_facultyID='"+fcltct.FacultyId+"'";
            return EditTable();
        }


        public bool DeleteId(int id)
        {
            sql = "DELETE FROM faculties_cost WHERE Faculties_facultyID ='" + id + "'";
            return EditTable();
        }



        public List<FacultyCost> ShowAllItems()
        {
            sql = "SELECT * FROM faculties_cost";
            return search();
        }


        public List<FacultyCost> SearchId(int id)
        {
            sql = "SELECT * FROM faculties_cost WHERE Faculties_facultyID ='" + id + "'";
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




        private List<FacultyCost> search()
        {
            List<FacultyCost> list = new List<FacultyCost>();
            connection = new MySqlConnection(connString);
            try
            {

                connection.Open();
                command = new MySqlCommand(sql, connection);
                dataReader = command.ExecuteReader();
                while (dataReader.Read())
                {
                    FacultyCost fclct = new FacultyCost();
                    fclct.FacultyId = dataReader.GetInt32(0);
                    fclct.Cost = dataReader.GetInt32(1);
                    list.Add(fclct);
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
