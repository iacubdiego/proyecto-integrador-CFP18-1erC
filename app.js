const express = require("express"); // requiero express
const app = express(); // uso la funcionalida de express
const path = require("path"); //crea rutas absolutas
const methodOverride = require("method-override"); // paquete para usar PUT y Delete

const PORT = process.env.PORT || 3006

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));


// Hago mis path de vistas y como lo veo con ejs
app.set('views', __dirname +'/views');
app.set('view engine', 'ejs');

// indico cual es mi ruta
const mainRoutes = require('./routes/mainRoutes')
app.use('/',mainRoutes)

// indico el camino donde estan mis productos
const productsRoutes = require('./routes/productsRoutes')
app.use('/products',productsRoutes)

// app.use((req, res, next) => {
//   res.status(404).render("404-page");
//   next();
// });

// configuarcion de public static
app.use(express.static('public'));


app.listen(PORT, () => {
  console.log('http://localhost:'+PORT);
});
