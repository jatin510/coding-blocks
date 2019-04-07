const express = require('express')
const session = require('express-session')
const {
   db
} = require('./db')
const passport = require('./passport')

const app = express()

app.set('view engine', 'hbs')



app.use(express.json())
app.use(express.urlencoded({
   extended: true
}))

app.use(session({
   secret: 'jsfkdfkldfhjk34hrjk',
   resave: false,
   saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())

app.use('/login', (require('./routes/login').route))
app.use('/signup', (require('./routes/signup').route))
app.use('/profile', (require('./routes/profile').route))


app.get('/', (req, res) => {
   if (!req.user) {
      return res.redirect('/login')
   }

   res.redirect('/profile')
})


db.sync({
      force: true
   })
   .then(() => {
      app.listen(8689, () => {
         console.log('server started on http://localhost:5050')
      })
   })