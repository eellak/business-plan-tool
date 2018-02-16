using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;
using Models;


namespace DBconnection
{
    public class EquipmentCost_Service
    {
        private string connString = Program.connString;
        private MySqlConnection connection;
        private MySqlCommand command;
        private string sql = null;
        private MySqlDataReader dataReader;



        public bool Insert(EquipmentCost eqpct)
        {
            sql = "INSERT INTO equipment_cost (Equipment_equipmentID, equipCost) VALUES ('" + eqpct.EquipmentId + "' , '" + eqpct.Cost + "')";
            return EditTable();
        }

        public bool Edit(EquipmentCost eqpct)
        {
            sql = "UPDATE equipment_cost SET Equipment_equipmentID='" + eqpct.EquipmentId + "', equipCost='" + eqpct.Cost + "' WHERE Equipment_equipmentID='"+eqpct.EquipmentId+"'";
            return EditTable();
        }


        public bool DeleteId(int id)
        {
            sql = "DELETE FROM equipment_cost WHERE Equipment_equipmentID='" + id + "'";
            return EditTable();
        }



        public List<EquipmentCost> ShowAllItems()
        {
            sql = "SELECT * FROM equipment_cost";
            return search();
        }


        public List<EquipmentCost> SearchId(int id)
        {
            sql = "SELECT * FROM equipment_cost WHERE Equipment_equipmentID='" + id + "'";
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




        private List<EquipmentCost> search()
        {
            List<EquipmentCost> list = new List<EquipmentCost>();
            connection = new MySqlConnection(connString);
            try
            {

                connection.Open();
                command = new MySqlCommand(sql, connection);
                dataReader = command.ExecuteReader();
                while (dataReader.Read())
                {
                    EquipmentCost eqpct = new EquipmentCost();
                    eqpct.EquipmentId = dataReader.GetInt32(0);
                    eqpct.Cost = dataReader.GetInt32(1);
                    list.Add(eqpct);
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
