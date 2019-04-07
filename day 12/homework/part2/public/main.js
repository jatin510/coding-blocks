function refreshList() {
  $("#list").empty();

  $.get(
    "/list",

    data => {
      for (let task of data) {
        if (task.done == true)
          var x = `<input type="checkbox" class="checkbox" name ="checkbox" checked/>`;
        else
          var x = '<input type="checkbox" class="checkbox" name ="checkbox" />';

        $("#list").append(
          $("<li>")
            .append($("<span>").text(`TASK : ${task.name} `))
            .append($("<span>").text(`DESCRIPTION : ${task.description} `))
            .append(
              $(x).click(ev => {
                //  ev.preventDefault();

                $.post("/toggle-done", {
                  id: task.id
                });
              })
            )
            .append(
              $("<span>")
                .addClass("delete")
                .text("DELETE")
                .click(ev => {
                  ev.preventDefault();

                  $.post("/delete-item", {
                    id: task.id
                  });

                  $(ev.target)
                    .parent()
                    .remove();

                  refreshList();
                })
            )
        );
      }
    }
  );
}

$("#add").click(() => {
  console.log("clicked");

  $.post("/add-item", {
    name: $("#name").val(),
    description: $("#desc").val()
  });

  refreshList();
});

refreshList();
