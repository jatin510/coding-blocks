const express = require('express')
const app = express()

const {
   db,
   Lists
} = require('./database/db')

app.use(express.json())
app.use(express.urlencoded({
   extended: true
}))

app.use('/todo-list', express.static(__dirname + '/public'))

app.post('/add-item', async (req, res) => {
   let newItem = await Lists.create({
      name: req.body.name,
      description: req.body.description
   })

   res.send(newItem)
})

app.get('/list', async (req, res) => {
   let tasks = await Lists.findAll()

   res.send(tasks)
})

db.sync()
   .then(() => {
      app.listen(5100, () => {
         console.log('server started on 5100')
      })
   })
   .catch((err) => {
      console.log(err)
   })