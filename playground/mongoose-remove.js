const ObjectID = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/Todo');
const {User} = require('../server/models/User');

Todo.remove({}).then((result) => {
    console.log(result);
});

Todo.findOneAndRemove({_id: 'iddddddddd'}).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('asdf').then((doc) => 
{
    console.log(doc);
});