const express = require('express')
const app = express()
const router = express.Router()

const {
   db,
   List
} = require('./database/db.js')


app.use(express.json())
app.use(express.urlencoded({
   extended: true
}))

app.use('/todo-list', express.static(__dirname + '/public'))


db.sync()
   .then(() => {
      app.listen(5100, () => {
         console.log('Server started at port 5100')
      })
   })