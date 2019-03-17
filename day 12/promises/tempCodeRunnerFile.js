fs.readFile(
    __dirname + '/n.txt',

    (err, data) => {
        if (err) throw err

        let hello = []
        hello = data.toString().split('\n')

        console.log(hello)

    }
)