// const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');

const productListPath = path.resolve(__dirname,"../database/products.json");
const productList = JSON.parse(fs.readFileSync(productListPath,'utf-8'));

const productsController = {
    mostrarProductos : (req,res)=>{
        res.render("index", { products : productList })
    },
    /*
    detalleById : (req , res) => {
        let id = req.params.id;
        // res.send("Get product by ID" + id);
       // res.render("products/createProducts");
       // res.render("products/detalleProduct"+id);
       let id = req.params.id;
        let product = productList.find(product => product.id == id);
        res.render("products/detalleProduct", {product : product});

    },
    */
    detailById : (req,res)=>{
        //muestra el detalle de un producto especifico.
        const id = req.params.id;
        //buscamos en el array el producto que coincida con el que llega por parametro.
        const filteredProduct = productList.find((product) => {
          return product.id == id;
        });
           res.render("products/detail", {filteredProduct});
        },
    // crea un producto y lo guarda
    createProduct : (req , res) => {
        res.render("products/createProducts");
    },
    storeProduct : (req , res) => {
        let product = req.body;
        productList.push(product);
        fs.writeFileSync(productListPath,JSON.stringify(productList,null,2));
        res.redirect("/products");
    },
    //------------------------
    // edita un producto y hace un update
    editProduct : (req , res) => {
        const id = req.params.id;
        const filteredProduct = productList.find((product) => {
            return product.id == id;
        });
        res.render("products/edit", {product : filteredProduct});
        
    },
    updateProduct : (req , res) => {
        let id = req.params.id;
        let newProduct = req.body;
        newProduct.id = id;
        for (let index = 0; index < productList.length; index++) {
            const elements = productList[index];
            if (elements.id == id){
                // productList[index] = newProduct;
               productList.put(newProduct);
            }
        }
        
        fs.readFileSync(productListPath,JSON.stringify(productList,null,2));
        res.redirect("/products");
    },
    // ------------------------
    // borra un producto segun el id pasado
    deleteProduct : (req , res) => {
        let id = req.params.id;
        let product = productList.find(product => product.id == id);
        res.render("products/deleteProduct", {product : product});
    
    }
}

module.exports = productsController;
