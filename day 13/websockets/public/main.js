const socket = io()

setTimeout(() => {
   console.log('Connected  on ' + socket.id)
}, 1000)

socket.on('chat_recieved', (data) => {
   console.log('aya re aya re.. server se data aya re ' + data.msg)

   $('#chats').append(
      $('<li>').text(data.msg)
   )
})

$(() => {
   $('#send').click(() => {
      socket.emit('chat', {
         msg: $('#msg').val()
      })
   })
})