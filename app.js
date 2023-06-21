const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3006


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Hago mis path de vistas y como lo veo con ejs
app.set('views', __dirname +'/views');
app.set('view engine', 'ejs');

// indico cual es mi ruta
const mainRoutes = require('./routes/mainRoutes')
app.use('/',mainRoutes)

// indico el camino donde estan mis productos
const productsRoutes = require('./routes/productsRoutes')
app.use('/products',productsRoutes)

// configuarcion de public static
app.use(express.static('public'));

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'views/index.html'))
// })

app.listen(PORT, () => {
  console.log('http://localhost:'+PORT);
});
