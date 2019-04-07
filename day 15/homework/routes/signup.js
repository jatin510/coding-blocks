const {
   Users
} = require('../db')
const route = require('express').Router()

route.get('/', (req, res) => {
   res.render('signup')
})

route.post('/', (req, res) => {

   Users.create({
         name: req.body.username,
         password: req.body.password,
         email: req.body.email
      })
      .then((user) => {
         res.redirect('/login')
      })
      .catch(err => {
         throw err
      })
})

module.exports = {
   route
}