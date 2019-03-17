const express = require('express')
const app = express()

m1 = (req, res, next) => {
    console.log('running m1')
    next()
}

m2 = (req, res, next) => {
    console.log('running m2')
    next()
}

app.use(m1)
app.use(m2)

app.get('/', (req, res) => {
    res.send('Hello')
})

app.listen(5500)