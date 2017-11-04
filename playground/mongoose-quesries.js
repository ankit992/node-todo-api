const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/Todo');

var id ='59fd9aa3cfc8dffc2c52b445';

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos',todos);
});

Todo.findOne({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findById(id).then((todos) => {
    if(!todos){
        return console.log('Id not found');
    }
    console.log('todos',todos);
});