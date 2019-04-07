const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const {
   Users
} = require('./db')

passport.use(new LocalStrategy(
   function (username, password, done) {
      Users.findOne({
            where: {
               username: username
            }
         })
         .then((user) => {
            if (!user)
               return done(null, false)
            if (user.password != password)
               return done(null, false)

            done(null, user)
         })
         .catch(done)
   }
))