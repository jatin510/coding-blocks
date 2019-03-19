const Sequelize = require('sequelize')

const db = new Sequelize({
   dialect: 'sqlite',
   // when using sqlite
   storage: __dirname + '/tasks.db',

   // for mysql/postgres/mssql
   host: '',
   username: '',
   password: '',
   database: ''
})

//Creating table
const Tasks = db.define('task', {

   //table column and its properties
   name: {
      type: Sequelize.STRING(100),
      allowNull: false
   },
   description: {
      type: Sequelize.TEXT,
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