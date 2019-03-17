$(() => {
    $(document.body)
        .append(
            $('<input>').attr('id', 'newtask')
        )
        .append(
            $('<button>')
            .text('ADD')
            .click(() => {

                console.log('click')
                $('#tasklist').append(
                    $('<li>')
                    .append(
                        $('<button>')
                        .text('X')
                        .click((ev) => {
                            // console.log(ev)
                            $(ev.target).parent().remove()
                        })
                    )
                    .append(
                        $('<button>')
                        .text('up')
                        .click((ev) => {
                            $(ev.target).parent().insertBefore(
                                $(ev.target).parent().prev()
                            )
                        })
                    )
                    .append(
                        $('<button>')
                        .text('down')
                        .click((ev) => {
                            $(ev.target).parent().insertAfter(
                                $(ev.target).parent().next()
                            )
                        })
                    )
                    .append(
                        $('<span>').text($('#newtask').val())
                    )
                )
            })
        )
        .append(
            $('<ul>').attr('id', 'tasklist')
        )
})