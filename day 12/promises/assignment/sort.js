const fs = require('fs')

const FILE1 = __dirname + '/file1.txt'
const FILE2 = __dirname + '/file2.txt'

fs.readFile(
    FILE1,
    (err, file1) => {
        let data1 = file1.toString().split('\n')

        fs.readFile(
            FILE2,
            (err, file2) => {
                let data2 = file2.toString().split('\n')

                let sort = data1.concat(data2)
                sort.sort((a, b) => {
                    return a - b
                })

                console.log(sort)

                fs.writeFile(
                    __dirname + '/sorted.txt',
                    sort.join('\n'),
                    (err) => {
                        console.log('helo')
                    }

                )
            }
        )
    }
)