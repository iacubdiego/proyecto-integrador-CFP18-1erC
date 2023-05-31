const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');
const productListPath = path.resolve(__dirname,"../database/products.json");
const productList = json.parse(fs.readFileSync(path,'utf-8'));

const productsControlers = {
    mostrarProductos : (req,res)=>{
        res.render("index", {
            products: productList
        })
    }
}
module.exports = productsControlers;
