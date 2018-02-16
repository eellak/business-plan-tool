using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;
using MySql.Data.MySqlClient;

namespace DBconnection
{
    public class Product_Service
    {
        private string connString = Program.connString;
        private MySqlConnection connection;
        private MySqlCommand command;
        private string sql = null;
        private MySqlDataReader dataReader;



        public bool Insert(Product pro)
        {
            sql = "INSERT INTO products (business_plans_bpID,productType,name,directed_to,innovation_factor,technology,license,competition,price,description,copyright,productCost,numProduct,percentageIncome) VALUES ('" + pro.BusinessPlanId + "' ,'" + pro.ProductType + "','" + pro.Name + "' ,'" + pro.Directed_to + "','" + pro.Innovation_factor + "','" + pro.Technology + "','" + pro.License + "' ,'" + pro.Competition + "','" + pro.Price + "','" + pro.Description + "','" + pro.Copyright + "','" + pro.ProductCost + "' ,'" + pro.NumProduct + "','" + pro.PercentageIncome + "')";
            return EditTable();
        }

        public bool Edit(Product pro)
        {
            sql = "UPDATE products SET business_plans_bpID='"+pro.BusinessPlanId+"',productType='"+pro.ProductType+"',name='"+pro.Name+"',directed_to='"+pro.Directed_to+"',innovation_factor='"+pro.Innovation_factor+"',technology='"+pro.Technology+"',license='"+pro.License+"',competition='"+pro.Competition+"',price='"+pro.Price+"',description='"+pro.Description+"',copyright='"+pro.Copyright+"',productCost='"+pro.ProductCost+"',numProduct='"+pro.NumProduct+"',percentageIncome='"+pro.PercentageIncome+"' WHERE productID='"+pro.ID+"'";
            return EditTable();
        }


        public bool DeleteId(int id)
        {
            sql = "DELETE FROM products WHERE productID='" + id + "'";
            return EditTable();
        }



        public List<Product>ShowAllItems()
        {
            sql = "SELECT * FROM products";
            return search();
        }


        public List<Product> SearchId(int id)
        {
            sql = "SELECT * FROM products WHERE productID ='" + id + "'";
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




        private List<Product> search()
        {
            List<Product> list = new List<Product>();
            connection = new MySqlConnection(connString);
            try
            {

                connection.Open();
                command = new MySqlCommand(sql, connection);
                dataReader = command.ExecuteReader();
                while (dataReader.Read())
                {
                    Product pro = new Product();
                    pro.ID= dataReader.GetInt32(0);
                    pro.BusinessPlanId = dataReader.GetInt32(1);
                    pro.ProductType = dataReader.GetBoolean(2);
                    pro.Name = dataReader.GetString(3);
                    pro.Directed_to = dataReader.GetString(4);
                    pro.Innovation_factor = dataReader.GetString(5);
                    pro.Technology = dataReader.GetString(6);
                    pro.License = dataReader.GetString(7);
                    pro.Competition = dataReader.GetString(8);
                    pro.Price = dataReader.GetInt32(9);
                    pro.Description = dataReader.GetString(10);
                    pro.Copyright = dataReader.GetString(11);
                    pro.ProductCost = dataReader.GetInt32(12);
                    pro.NumProduct = dataReader.GetInt32(13);
                    pro.PercentageIncome = dataReader.GetInt32(14);
                    list.Add(pro);
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
