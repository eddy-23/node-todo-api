//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp",{useNewUrlParser: true}, (err, client) => {
  if(err) {
      return console.log('Unable to connect to MongoDB server');
  };
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');
  //deleteMany

  //deleteOne

  //findOneAndDelete

// db.collection('Todos').deleteMany({text: 'Walk with the dog'}).then((result) => {
//   console.log('Todos:');
//   console.log(result);
// }, (err) => {
//   console.log('Unable to delete Todos', err);
// });

db.collection('Todos').deleteOne({text: 'Something to do'}).then((result) => {
  console.log('Todos:');
  console.log(result);
}, (err) => {
  console.log('Unable to delete Todos', err);
});


client.close();
});