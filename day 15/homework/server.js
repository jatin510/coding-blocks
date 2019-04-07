const express = require('express')
const session = require('express-session')
const {
   db
} = require('./db')
const passport = require('./passport')


const app = express()

app.use(express.json())
app.use(express.urlencoded({
   extended: true
}))

app.use(session({
   secret: 'sdjhj343j4j4hj3',
   resave: false,
   saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())

app.use('/login', (require('./routes/login').route))
app.use('/signup', (require('./routes/signnup').route))
app.use('/profile', (require('./routes/profile').route))

app.get('/', (req, res) => {
   if (!req.user) {
      return res.redirect('/login')
   }

   res.redirect('/profile')
})

db.sync()
   .then(() => {
      app.listen(5050, () => {
         console.log('http://localhost:5050')
      })
   })