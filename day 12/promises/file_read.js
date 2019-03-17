const fs = require('fs')

const FILENAME = __dirname + '/ans.txt'


fs.readFile(
    __dirname + '/n.txt',

    (err, data) => {
        if (err) throw err


        let hello = data.toString().split('\n')
        console.log(hello)
        hello = hello.filter((x) => (x % 2 == 0))

        fs.writeFile(
            FILENAME,
            hello.join('\n'),
            (err) => {
                if (err) throw err
                console.log('Successfully done')
            }
        )

    }
)