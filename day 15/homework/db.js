const Sequelize = require('sequelize')

const db = new Sequelize({
   dialect: 'sqlite',
   storage: __dirname + '/users.db'
})

const Users = db.define('users', {
   username: {
      type: Sequelize.STRING(30),
      unique: true,
      allowNull: false
   },
   password: {
      type: Sequelize.STRING(30)
   },
   email: {
      type: Sequelize.STRING(30)
   }

})

module.exports = {
   db,
   Users
}