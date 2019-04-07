const route = require('express').Router()
const {
   Users
} = require('../database/db')
const path = require('path')

route.get('/', (req, res) => {

   console.log('signup')
   res.sendFile(path.resolve('public/signup.html'))

})

route.post('/', (req, res) => {

   Users.create({
         username: req.body.username,
         password: req.body.password,
         email: req.body.email
      })
      .then((user) => {
         res.redirect('/login')
      })
      .catch((err) => {
         throw err
      })
})

module.exports = {
   route
}