const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//var id = '5bc9e6a086a24912aae9e104';

var id = '5bc5e594e057d304abf5f707';

if (! ObjectID.isValid(id)) {
    console.log('ID not valid');
    return;
}

// Todo.find({
//     _id: id
// }).then((todos) => {
//    console.log('Todos ', todos); 
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//    console.log('Todo ', todo); 
// });

// Todo.findById(id).then((todo) => {
//     console.log('Todo by Id', todo); 
// }).catch((e) => {
//     console.log(e);
// });

User.findById(id).then((user) => {
    if(!user) {
        return console.log('Unable to find user');
    }
    console.log(JSON.stringify(user, undefined, 2)); 
}).catch((e) => {
    console.log(e);
});