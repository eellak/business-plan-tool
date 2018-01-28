using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Models;
using DBconnection;

namespace ContactManager.Controllers
{
    public class ProductController : ApiController
    {
        // GET api/product
        private Product_Service prodService;

        public ProductController()
        {
            this.prodService = new Product_Service();
        }

        public Product[] Get()
        {
            return prodService.ShowAllItems().ToArray();
        }

        // GET api/product/5
        public Product Get(int id)
        {
            var data = prodService.SearchId(id);
            if (data.Count > 0)
            {
                return data.ElementAt(0);
            }
            return null;
        }

        // POST api/product
        public Product Post(Product product)
        {
            if (prodService.Insert(product))
            {
                product.ID = Program.GetLastId();
                return product;
            }
            return null;
        }

        // PUT api/product/5
        public Product Put(int id, Product newProduct)
        {
            newProduct.ID = id;
            if (prodService.SearchId(id).Count > 0)
            {
                if (prodService.Edit(newProduct))
                {
                    return newProduct;
                }
            }
            return null;
        }

        // DELETE api/product/5
        public Product Delete(int id)
        {
            Product oldProduct = new Product();
            var data = prodService.SearchId(id);
            if (data.Count > 0)
            {
                oldProduct.SetProduct(data.ElementAt(0));
                if (prodService.DeleteId(id))
                {
                    return oldProduct;
                }
            }
            return null;
        }
    }
}
