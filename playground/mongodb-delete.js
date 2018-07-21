const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });


    // Delete all users with name Charles Torry
    // db.collection('Users').deleteMany({name: 'Charles Torry'}).then((result) => {
    //     console.log(JSON.stringify(result, undefined, 2));
    // });


    // Delete the user with id ObjectId("5b5299f2104e240148befa8e")
    db.collection('Users').findOneAndDelete({_id: new ObjectID("5b5299f2104e240148befa8e")}).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });


    // client.close();
});