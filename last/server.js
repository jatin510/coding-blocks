const express = require('express')
const session = require('express-session')
const path = require('path')
const passport = require('./passport')
const routes = {
   login: require('./routes/login').route,
   signup: require('./routes/signup').route,
   index: require('./routes/index').route,
   vendor: require('./routes/vendor').route,
   cart: require('./routes/cart').route


}

console.log('server\n\n')
console.log(session)





const app = express()

app.use(express.json())
app.use(express.urlencoded({
   extended: true
}))

app.use(session({
   secret: 'never trust anyone',
   resave: false,
   saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(express.static('./public'))

app.use('/signup', routes.signup)
app.use('/login', routes.login)
app.use('/index', routes.index)
app.use('/vendor', routes.vendor)
app.use('/cart', routes.cart)

app.get('/', (req, res) => {
   if (!req.user) {
      return res.redirect('/login')
   }

   res.redirect('/index')
})




app.listen(5050)