const Sequelize = require('sequelize')

const db = new Sequelize({
   dialect: 'sqlite',
   storage: __dirname + '/messages.db'
})

const Msgs = db.define('message', {
   username: {
      type: Sequelize.STRING(50),
      allowNull: false
   },
   message: {
      type: Sequelize.TEXT;
      allowNull: false
   }

})

module.exports = {
   db,
   Msgs
}