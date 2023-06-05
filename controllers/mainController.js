let productList = [
  {
      id: 1,
      nombre : "Auto Blanco",
      descripcion : "Mejor motor del mercado",
      precio : 20000,
      enVenta : true
  },
  {
      id: 2,
      nombre : "Auto Blanco",
      descripcion : "El mas Buscado",
      precio : 20000,
      enVenta : true
  },
  {
      id: 3,
      nombre : "Auto Blanco",
      descripcion : "5 ptas, baul ancho",
      precio : 20000,
      enVenta : true
  }
  ]

const mainController = {
    index:(req, res) => {
        res.render("index", { productList: productList })
      }
}

module.exports = mainController