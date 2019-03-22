function refreshList() {

   $('#list').empty()

   $.get('/list',

      (data) => {
         for (let task of data) {

            if (task.done == true)
               var x = `<input type="checkbox" name ="checkbox" checked/>`
            else
               var x = '<input type="checkbox" name ="checkbox" />'

            $('#list').append(

               $('<li>')
               .append(
                  $('<span>').text(`TASK : ${task.name} `)
               )
               .append(
                  $('<span>').text(`DESCRIPTION : ${task.description} `)
               )
               .append(
                  $(x)
               )
               .append(
                  $('<span>').text('DELETE')
               )
            )

         }
      }
   )
}

$('#add').click(() => {
   console.log('clicked')

   // $.post(
   //    '/add-item', {
   //       name: $('#name').val(),
   //       description: $('#desc').val()
   //    },

   // )

   refreshList()
})

refreshList()