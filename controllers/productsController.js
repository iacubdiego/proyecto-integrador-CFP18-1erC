const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');
const { validationResult } = require("express-validator"); //mensajes de error para validaciones


const productListPath = path.resolve(__dirname,"../database/products.json");
const productList = JSON.parse(fs.readFileSync(productListPath,'utf-8'));

const productsController = {
    mostrarProductos : (req,res)=>{
        res.render("index", { products : productList })
    },
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
      //guardamos en una variable que contrendra los errores, lo que llega mediante el req.
    const errors = validationResult(req);

    //si hay errores, mostramos los errores en la vista
    if (!errors.isEmpty()) {
      return res.render("products/create", {
        errors: errors.mapped(),
        old: req.body,
      });
      //sino cargamos el producto
    } else {
    
      //generamos un id
      const id = uuidv4();
      //capturamos lo que llega del formulario
      const newProduct = req.body;
      //le asignamos el id al producto
      newProduct.id = id;
      // le asignamos el array de imagenes
    //   newProduct.images = req.files;
      //agregamos el nuevo producto al array de productos
      productList.push(newProduct);
      //sobreescribimos el json con la nueva info
      fs.writeFileSync(productListPath,JSON.stringify(productList,null,2));
      // redirigimos al inicio
      res.redirect("/products");
    }
},
    //------------------------
    // edita un producto y hace un update
    editProduct : (req , res) => {
        const id = req.params.id;
        const filteredProduct = productList.find((product) => product.id == id); 
        res.render("products/edit", {product : filteredProduct});
            
        },
    updateProduct : (req , res) => {
        const id = req.params.id;
        const { nombre, descripcion, precio, enVenta} = req.body;
        const productActualizar = productList.find((product) => product.id == id);
        productActualizar.nombre = nombre;
        productActualizar.descripcion = descripcion;
        productActualizar.precio = precio;
        productActualizar.enVenta = enVenta;
        fs.writeFileSync(productListPath,JSON.stringify(productList,null,2));
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
