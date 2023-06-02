const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');
// const productListPath = path.resolve(__dirname,"../database/products.json");
// const productList = json.parse(fs.readFileSync(path,'utf-8'));

let productList = [
    {
        "id": "1",
        "nombre" : "Auto Blanco",
        "precio" : "20000",
        "enVenta" : "true"
    },
    {
        "id": "2",
        "nombre" : "Auto Blanco",
        "precio" : "20000",
        "enVenta" : "true"
    },
    {
        "id": "3",
        "nombre" : "Auto Blanco",
        "precio" : "20000",
        "enVenta" : "true"
    }
    ]

const productsController = {
    mostrarProductos : (req,res)=>{
        res.render("index", {
            products: productList
        })
    }
}
module.exports = productsController;
