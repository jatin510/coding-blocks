const fs = require('fs')

const FILENAME = __dirname + 'in.txt'

fs.writeFile(
    FILENAME,
    'Hello World',
    (err) => {
        if (err) throw err

        console.log('file Written')
    }
)


console.log(' file written successfully ')