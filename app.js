const express = require('express')
const app = express()
const path = require('path')

const PORT = process.env.PORT || 3006
const mainRoutes = require('./routes/mainRoutes')

app.set('views', __dirname +'/views');
app.set('view engine', 'ejs');

app.use('/',mainRoutes)

// configuarcion de public static
app.use(express.static('public'));

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'views/index.html'))
// })

app.listen(PORT, () => {
  console.log('http://localhost:'+PORT);
});
