const path = require('path')
const fs = require('fs')
const productListPath = path.resolve(__dirname,"../database/products.json");
const productList = JSON.parse(fs.readFileSync(productListPath,'utf-8'));

const mainController = {
    index:(req, res) => {
        res.render("index", { products : productList })
    },
    productCart:(req, res) => {
      res.render("productCart", { products : productList })
    },
    
}

module.exports = mainController