const path = require('path')
const express = require('express')

const app = express()

const PORT = process.env.PORT || 3000

const mainRoutes = require('./routes/mainRoutes')

app.use(express.static('public'));

app.use('/',mainRoutes)

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'views/index.html'))
// })

app.listen(PORT, () => {
  console.log('http://localhost:'+PORT);
});
