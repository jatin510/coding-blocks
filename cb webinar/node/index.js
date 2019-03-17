const fs = require('fs')

fs.writeFile('./index.txt', 'data', (err) => (console.log(err)))