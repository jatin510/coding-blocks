const route = require('express').Router()
const path = require('path')

route.get('/', (req, res) => {
   res.sendFile(path.resolve('public/index.html'))
   console.log(req.user)
})

module.exports = {
   route
}