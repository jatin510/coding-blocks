const route = require('express').Router()
const path = require('path')

route.get('/', (req, res) => {
   res.sendFile(path.resolve('public/vendor.html'))

})



module.exports = {
   route
}