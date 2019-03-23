const express = require('express')
const http = require('http')
const socketio = require('socket.io')

const app = express()
const server = http.Server(app)
const io = socketio(server)

io.on('connection', (socket) => {
   console.log('connected on ' + socket.id)

   socket.on('chat', (data) => {
      console.log(socket.id + ' says ' + data.msg)
      socket.emit('chat_recieved', data)
      //io.emit(to all)
      //socket.emit(to particular)
   })
})

app.use('/', express.static(__dirname + '/public'))

server.listen(3333, () => {
   console.log('server started on 3333')
})