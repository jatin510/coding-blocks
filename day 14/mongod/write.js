const {
   MongoClient
} = require('mongodb')

const DB_URL = 'mongodb://localhost:27017'

MongoClient.connect(DB_URL, (err, client) => {
   if (err) throw err

   const testdb = client.db('testdb')

   console.log(testdb)

   const people = testdb.collection('people')

   people.insertMany(
      [{
            name: 'Jatin',
            age: 20,
            city: 'Delhi'
         },
         {
            name: 'Vishal',
            age: 22,
            city: 'Delhi'
         }, {
            name: 'Subh',
            age: 22,
            city: 'Delhi'
         },


      ], (err, result) => {
         if (err) throw err

         console.log(result)

      })
})