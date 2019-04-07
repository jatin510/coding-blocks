const app = require('express')()
const path = require('path')

app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.listen(7070)