const route = require('express').Router()
const passport = require('passport')
const path = require('path')


route.get('/', (req, res) => {
   res.sendFile(path.resolve('public/login.html'))
})

route.post('/', passport.authenticate('local', {
   successRedirect: '/index',
   failureRedirect: '/login'
}))

module.exports = {
   route
}