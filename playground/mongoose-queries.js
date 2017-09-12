const {ObjectId} = require('mongodb');

const {queries} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '59b7f526ca1ad91d2404bab7';

// if(!ObjectId.isValid(id)){
//     console.log('Id not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todos', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

User.findById('59b598ff524c524240463a43').then((user) => {
    if(!user){
        return console.log('User not found');
    }
    console.log(user);
}, (e) => {
    console.log(e);
});