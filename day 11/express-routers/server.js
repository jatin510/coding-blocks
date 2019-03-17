const express = require('express')

const routes = {
    student: require('./routes/student'),
    teacher: require('./routes/teacher')
}

const app = express()

app.use('/student', routes.student)
app.use('/teacher', routes.teacher)

app.get('/', (req, res) => {
    res.send('Hello')
})

app.listen(5000)