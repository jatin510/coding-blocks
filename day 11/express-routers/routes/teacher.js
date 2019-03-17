const express = require('express')

let teachers = [{
        name: 'Teacher1',
        subjects: ['a', 'b']
    },
    {
        name: 'Teacher2',
        subjects: ['f', 'b']
    },
    {
        name: 'Teacher3',
        subjects: ['ag', 'bd']
    },
    {
        name: 'Teacher4',
        subjects: ['as', 'b']
    },
    {
        name: 'Teacher5',
        subjects: ['ab', 'db']
    },
]


const route = express.Router()

route.get('/', (req, res) => {
    res.send(teachers)
})

module.exports = route