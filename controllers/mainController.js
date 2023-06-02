const path = require('path')

const mainController = {
    index:(req, res) => {
        res.render("index")
      }
}

module.exports = mainController