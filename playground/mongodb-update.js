const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos')
    //     .findOneAndUpdate({
    //         _id: new ObjectID('5b53741b74f6088deeed575c')
    //     }, {
    //         $set: {
    //             completed: true
    //         }
    //     }, {
    //         returnOriginal: false
    //     })
    //     .then((result) => {
    //         console.log(JSON.stringify(result, undefined, 2));
    //     });

    db.collection('Users')
        .findOneAndUpdate({
            _id: new ObjectID('5b5294d84452f3185c3f3ea4')
        }, {
            $set: {
                name: 'Charles'
                // name: 'Jen'
            },
            $inc: {
                age: 1
                // age: -1
            }
        }, {
            returnOriginal: false
        })
        .then((result) => {
            console.log(JSON.stringify(result, undefined, 2));
        });

    // ObjectId("5b5294d84452f3185c3f3ea4")

    // client.close();
});