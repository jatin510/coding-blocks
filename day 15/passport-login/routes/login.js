const route = require('express').Router()
const passport = require('passport')

route.get('/', (req, res) => {
   console.log('hello this is login page')
   res.render('login')
})

route.post('/', passport.authenticate('local', {
   successRedirect: '/profile',
   failureRedirect: '/login'
}))


route.get('/facebook',
   passport.authenticate('facebook')
)

route.get(
   '/facebook/callback',
   passport.authenticate('facebook', {
      successRedirect: '/profile',
      failureRedirect: '/login'
   })
)

module.exports = {
   route
}