const express = require('express')

let students = [{
        name: 'Jatin',
        grade: 1
    },
    {
        name: 'chanda',
        grade: 2
    },
    {
        name: 'vishal',
        grade: 3
    },
    {
        name: 'subh',
        grade: 4
    },
    {
        name: 'ja',
        grade: 5
    }
]

const route = express.Router()

route.get('/', (req, res) => {
    res.send(students)
})

module.exports = route