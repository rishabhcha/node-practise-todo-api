const {ObjectId} = require('mongodb');

const {queries} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findByIdAndRemove('59b93d52ef4e23398f5ad1b7').then((todo) => {
    console.log(todo);
});