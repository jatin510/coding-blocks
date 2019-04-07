const socket = io()


$(() => {

   $('#chatbox').hide()
   $('#chats').hide()

   $('#login').click(() => {
      socket.emit('login', {
         username: $('#username').val()
      })
   })

   socket.on('loggedin', () => {
      console.log('Login successful')
      $('#loginform').hide().toggleClass('d-flex')
      $('#chatbox').show()
   })

   socket.on('chat_recieved', (data) => {
      console.log('chat recieved')
      console.log(data.msg)
      console.log(data.username)
   })

   $('#send').click(() => {
      console.log('chat sending')
      socket.emit('chat', {
         msg: $('#msg').val()
      })
   })


})