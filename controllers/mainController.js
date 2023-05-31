const path = require('path')

const mainController = {
    index:(req, res) => {
        res.sendFile(path.join(__dirname, '../views/index.html'))
      }
}

module.exports = mainController