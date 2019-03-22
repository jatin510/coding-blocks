function refreshList() {

   $.get(
      '/add-item',
      (data) => {
         for (let task of data) {
            $('listitem').append(

               $('<li>')
               .append(
                  $('span').text(`TASK : ${task.name} &nbsp;&nbsp;`)
               )
               .append(
                  $('span').text(`DESCRIPTION : ${task.description} &nbsp;&nbsp;`)
               )
               .append(
                  $('input[type="checkbox"]'.attr("checked", "checked"))
               )
            )
         }

      }
   )
}

$('#add').click(() => {

   $.post(

      '/add-item', {
         name: $('#name').val(),
         description: $('#description').val(),
      },
      (data) => {
         if (data.success == true) {
            refreshList()
         }
      }
   )
})

refreshList()



// $("#myform").submit(e => {
//    e.preventDefault();
//    $.ajax({
//       url: "/add-item",
//       type: "post",
//       data: $("#myform").serialize(),
//       success: function () {
//          console.log("submtit successfull");
//       }
//    });
// });