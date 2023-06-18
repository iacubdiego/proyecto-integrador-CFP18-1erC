// const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');

const productListPath = path.resolve(__dirname,"../database/products.json");
const productList = JSON.parse(fs.readFileSync(productListPath,'utf-8'));

const productsController = {
    mostrarProductos : (req,res)=>{
        res.render("index", { products : productList })
    },
    detalleById : (req,res)=>{
        let id = req.params.id;
        res.send("Get product by ID" + id);
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
        let id = req.params.id;
        let product = productList.find(product => product.id == id);
        res.render("products/editProduct", {product : product});
        
    },
    updateProduct : (req , res) => {
        let id = req.params.id;
        let newProduct = req.body;
        newProduct.id = id;
        for (let index = 0; index < productList.length; index++) {
            const elements = productList[index];
            if (elements.id == id){
                productList[index] = newProduct;
               // productList.put(newProduct);
            }
        }
        
        fs.readFileSync(productListPath,JSON.stringify(productList,null,2));
        res.redirect("/products");
    },
    // ------------------------
    // borra un producto segun el id pasado
    deleteProduct : (req,res) => {
        let id = req.params.id;

        console.log('deleteProduct' + id);

        for (let index = 0; index < productList.length; index++) {
            const elements = productList[index];
            if (elements.id == id){
                productList.splice(index, 1);
            }
        }

        fs.readFileSync(productListPath,JSON.stringify(productList,null,2));
        res.redirect("/products");
    }
    //-----------------------------------

}

module.exports = productsController;
