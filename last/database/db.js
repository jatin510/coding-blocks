const Sequelize = require('sequelize')

const db = new Sequelize({
   dialect: 'sqlite',
   storage: __dirname + '/ecom.db'
})


const Users = db.define('user', {
   id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
   },
   username: {
      type: Sequelize.STRING,
      allowNull: false
   },
   password: {
      type: Sequelize.STRING(30),
   },
   email: {
      type: Sequelize.STRING(30)
   }
})

const Products = db.define('product', {
   id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
   },
   productName: {
      type: Sequelize.STRING,
      allowNull: false
   },
   manufacturer: Sequelize.STRING,
   price: {
      type: Sequelize.FLOAT,
      allowNull: false,
      defaultValue: 0.00
   }
})

const Carts = db.define('cart', {
   id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
   },
   username: {
      type: Sequelize.STRING,
      allowNull: false
   },
   productName: {
      type: Sequelize.STRING,
      allowNull: false
   },
   Price: {
      type: Sequelize.FLOAT,
      allowNull: false
   },
   quantity: {
      type: Sequelize.INTEGER
   }

})

db.sync()
   .then(() => {
      console.log('database has been synced')
   })
   .catch(err => {
      console.log('error in db sync')
   })

exports = module.exports = {
   Users,
   Products,
   Carts
}