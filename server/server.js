var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user')
var app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }), (e) => {
        res.status(400).send(e);
    }
});


//GET /todos/1234
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    if (! ObjectID.isValid(id)) {
        console.log('ID not valid');
        return res.status(404).send();
    }
    
    Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        res.send({todo});
    }).catch( (e) => {
        res.status(400).send();
    })
});

app.listen(port, () => {
   console.log(`Started on port ${port}`); 
});


// var newUser = new User({
//     email: 'qwe@1.com    '
//     });
// newUser.save().then((doc) => {
//     console.log('Saved user: ', doc);
// }, (e) => {
//     console.log('unable to save user', e);
// });

// var newTodo = new Todo({
//     text: 'test note 2',
//     completed: false,
//     completedAt: 111111
//     });

// newTodo.save().then((doc) => {
//     console.log('Saved todo: ', doc);
// }, (e) => {
//     console.log('unable to save todo');
// });

module.exports = {app};