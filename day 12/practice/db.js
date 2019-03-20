const Sequelize = require('sequelize')

const db = new Sequelize({
   dialect: 'sqlite',
   storage: __dirname + 'tasks.db'
})

const Tasks = db.define('task', {
   name: {
      type: Sequelize.STRING(500),
      allowNull: false
   },
   description: {
      type: Sequelize.TEXT
   },
   done: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
   }
})


module.exports = {
   db,
   Tasks
}