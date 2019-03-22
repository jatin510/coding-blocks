const express = require('express')
const app = express()
// const router = express.Router()

const {
   db,
   Lists
} = require('./database/db.js')


app.use(express.json())
app.use(express.urlencoded({
   extended: true
}))

app.use('/todo-list', express.static(__dirname + '/public'))

app.post('/add-item', async (req, res) => {
   let newItem = await Lists.create({
      name: req.body.name,
      description: req.body.description,
   })

   // console.log(newItem)

   res.send(newItem)
})

app.get('/add-item', async (req, res) => {
   let tasks = await Lists.findAll()

   res.send(tasks)
})

db.sync()
   .then(() => {
      app.listen(5100, () => {
         console.log('Server started at port 5100')
      })
   })