//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp",{useNewUrlParser: true}, (err, client) => {
  if(err) {
      return console.log('Unable to connect to MongoDB server');
  };
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

//   db.collection('Todos').insertOne({
//         text: 'Something to do',
//         complete: false
//     }, (err, result) => {
//         if (err) {
//             console.log('Unable to insert Todo', err);
//         }
//         console.log(JSON.stringify(result.ops, undefined, 2));
//     });

// db.collection('Users').insertOne({
//     name: 'Elena',
//     age: 35,
//     location: 'Moscow'
// }, (err, result) => {
//     if (err) {
//         console.log('Unable to insert Todo', err);
//     }
//     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
// });

    client.close();
});