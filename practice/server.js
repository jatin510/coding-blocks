const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

tasks = []

app.use('/app', express.static(__dirname + '/public'))

app.get('/tasks', (req, res) => {
    res.send(tasks)
})

app.post('/tasks', (req, res) => {
    tasks.push({
        name: req.body.name,
        priority: +(req.body.priority || 1)
    })

    res.send({
        taskID: tasks.length - 1,
        success: true
    })

})

app.listen(5000)