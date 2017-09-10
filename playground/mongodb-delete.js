// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    //deelte Many
    // db.collection('Todos').deleteMany({text:'Eat Launch'}).then((result) => {
    //     console.log(result);
    // });

    //delete One
    // db.collection('Todos').deleteOne({text:'Eat launch'}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({
    //     name: 'Rishabh Chandel'
    // });

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('59b50dfbce215413247fae88')
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });

    //db.close();
});