const express = require('express')
const http = require('http')
const socketio = require('socket.io')
const {
   Msgs,
   db
} = require('./database/db')


const app = express()
const server = http.Server(app)
const io = socketio(server)

let idUserMap = {}

io.on('connection', (socket) => {
   console.log('Connected with id ' + socket.id)

   socket.on('login', (data) => {
      idUserMap[socket.id] = data.username

      console.log('login request from ' + idUserMap[socket.id])

      socket.emit('loggedin')
   })

   socket.on('chat', (data) => {
      io.emit('chat_recieved', {
         username: idUserMap[socket.id],
         msg: data.msg
      })
   })
})

app.use('/', express.static(__dirname + '/public'))

server.listen(5555, () => {
   console.log('connected with port 5555')
})