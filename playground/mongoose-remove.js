const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//var id = '5bc5e594e057d304abf5f707';

// if (! ObjectID.isValid(id)) {
//     console.log('ID not valid');
//     return;
// }

//Todo.deleteMany({}).then((result) => {
//    console.log(result);
//}) ;

//Todo.findOneAndRemove()
//Todo.findByIdAndRemove();
Todo.findOneAndDelete('5bcf17f7cf790e071a296d68').then((todo) => {
    console.log(todo);
});