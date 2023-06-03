const path = require('path')
const express = require('express')

const app = express()

const PORT = process.env.PORT || 3006

const mainRoutes = require('./routes/mainRoutes')

app.use(express.static('public'));

app.set('views', __dirname +'/views');
app.set('view engine', 'ejs');

app.use('/',mainRoutes)
/* veo que pasa */
/*
 app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'views/index.ejs'))
 })
*/
app.listen(PORT, () => {
  console.log('http://localhost:'+PORT);
});
