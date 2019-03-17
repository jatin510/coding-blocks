console.log($('newtask'))

console.log(`a = ${new Date().getTime()}`)

$(() => {
    $('#addtask').click(() => {
        console.log('click')
        $('#tasklist').append(
            $('<li>').text($('#newtask').val())
        )
    })
})