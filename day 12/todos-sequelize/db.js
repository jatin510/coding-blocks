const Sequelize = requie('sequelize')

const db = new Sequelize({
   dialect: 'sqlite',
   //when using sqlite
   storage: __dirname + '/tasks.db',

   //for mysql / postgres/ mysql

   host: '',
   username: '',
   password: '',
   database: ''

})

const Tasks = db.define('task', {
   name: {
      type : Sequelize.String
   }
})