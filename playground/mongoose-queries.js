const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b563adfd086a020d016e94911';
var userid = '5b55e3cd37c6f317b092182b';
var baduserid = '5b55e3cd37c6f317b092182b11';
// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({_id: id})
//     .then((todos) => {
//         console.log('Todos', todos);
//     });

// Todo.findOne({_id: id})
//     .then((todo) => {
//         console.log('Todo', todo);
//     });

// Todo.findById(id)
//     .then((todo) => {
//         if(!todo) {
//             console.log('Id not found');
//         }
//         console.log('Todo by Id', todo);
//     })
//     .catch((e) => console.log(e));

// query users collection
// use user.findbyid to get a user
// find a user that is not supposed to be found
// handle errors using catch

User.findById(userid).then((user) => {
    console.log('----------------------');
    console.log(user)
    console.log('----------------------');
}, (e) => {
    console.log(e);
});

User.findById(baduserid).then((user) => {
    console.log(user)
}, (e) => {
    console.log(e);
});
