using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;
using Models;


namespace DBconnection
{
    public class Equipment_Service
    {
        private string connString = Program.connString;
        private MySqlConnection connection;
        private MySqlCommand command;
        private string sql = null;
        private MySqlDataReader dataReader;



        public bool Insert(Equipment eqp)
        {
            sql = "INSERT INTO equipment (business_plans_bpID, equipType, address, division, firsthand, acquisition_date) VALUES ('" + eqp.BusinessPlanId + "' , '" + eqp.EquipType + "' , '" + eqp.Address + "' , '" + eqp.Division + "' , '" + eqp.Firsthand + "' , '" + eqp.Acquisition_date + "')";
            return EditTable();
        }

        public bool Edit(Equipment eqp)
        {
            sql = "UPDATE equipment SET business_plans_bpID='" + eqp.BusinessPlanId + "', equipType='" + eqp.EquipType + "', address='" + eqp.Address + "', division='" + eqp.Division + "', firsthand='" + eqp.Firsthand + "', acquisition_date='" + eqp.Acquisition_date + "' WHERE equipmentID='"+eqp.ID + "'";
            return EditTable();
        }


        public bool DeleteId(int id)
        {
            sql = "DELETE FROM equipment WHERE equipmentID='" + id + "'";
            return EditTable();
        }



        public List<Equipment> ShowAllItems()
        {
            sql = "SELECT * FROM equipment";
            return search();
        }


        public List<Equipment> SearchId(int id)
        {
            sql = "SELECT * FROM equipment WHERE equipmentID='" + id + "'";
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




        private List<Equipment> search()
        {
            List<Equipment> list = new List<Equipment>();
            connection = new MySqlConnection(connString);
            try
            {

                connection.Open();
                command = new MySqlCommand(sql, connection);
                dataReader = command.ExecuteReader();
                while (dataReader.Read())
                {
                    Equipment eqp = new Equipment();
                    eqp.ID = dataReader.GetInt32(0);
                    eqp.BusinessPlanId = dataReader.GetInt32(1);
                    eqp.EquipType = dataReader.GetString(2);
                    eqp.Address = dataReader.GetString(3);
                    eqp.Division = dataReader.GetString(4);
                    eqp.Firsthand = dataReader.GetInt32(5);
                    eqp.Acquisition_date = dataReader.GetInt32(6);
                    list.Add(eqp);
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
