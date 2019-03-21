const Sequelize = require('sequelize')

const db = new Sequelize({
   dialect: 'sqlite',
   storage: __dirname + 'database.db'
})

const List = db.define('list', {
   name: {
      type: Sequelize.STRING(100),
      allowNull: false
   },
   description: {
      type: Sequelize.TEXT,
      allowNull: false
   },
   done: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
   }

})

module.exports = {
   db,
   List
}