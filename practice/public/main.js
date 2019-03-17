$(() => {

    function refreshList() {

        $("#list").empty()

        $.get(
            '/tasks',
            (data) => {
                for (let task of data) {
                    $('#list').append(
                        $('<li>').text(task.name)
                    )
                }
            }
        )
    }


    $('#add').click(() => {

        $.post(
            '/tasks', {
                name: $('#namelist').val()
            },
            (data) => {
                if (data.success == true) {
                    refreshList()
                }
            }
        )
    })

    refreshList();
    console.log('hello')

})