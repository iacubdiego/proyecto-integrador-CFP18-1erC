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

const usersRoutes = require('./routes/usersRoutes')
app.use('/users',usersRoutes)



// configuarcion de public static
app.use(express.static('public'));

// ** DON'T TOUCH FROM HERE **
// ** catch 404 and forward to error handler **

app.use((req, res, next) => next(createError(404)));

//Error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.path = req.path;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.send('ESTE ES UN ERROR');//Falta cargar la vista
  });



app.listen(PORT, () => {
  console.log('http://localhost:'+PORT);
});
