//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp",{useNewUrlParser: true}, (err, client) => {
  if(err) {
      return console.log('Unable to connect to MongoDB server');
  };
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

// db.collection('Todos').findOneAndUpdate({text: 'Something to do'}, {$set: {complete: false}}, {returnOriginal: false}).then((result) => {
//   console.log('Todos:');
//   console.log(result);
// }, (err) => {
//   console.log('Unable to update Todos', err);
// });

db.collection('Users').findOneAndUpdate({_id: new ObjectID("5bbf0e65b027ea039a480e36")}, 
{$set: {name: 'Zed'}, $inc: {age: 1}}, {returnOriginal: false}).then((result) => {
    console.log('Users:');
    console.log(result);
  }, (err) => {
    console.log('Unable to update Users', err);
  });
  
client.close();
});