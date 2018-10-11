//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp",{useNewUrlParser: true}, (err, client) => {
  if(err) {
      return console.log('Unable to connect to MongoDB server');
  };
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');
  
//   db.collection('Todos').find(
//       //{_id: new Object('5bbf102fe91c93b4d6b8fc23')}
//       ).count().then((count) => {
//     console.log('Todos:');
//     console.log(count);//JSON.stringify(docs, undefined, 2));
//   }, (err) => {
//     console.log('Unable to fetch Todos', err);
//   });
//   
db.collection('Users').find({name: 'Elena'}).toArray().then((docs) => {
  console.log('Users:');
  console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
  console.log('Unable to fetch Todos', err);
});

client.close();
});