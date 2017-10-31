const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
       return console.log('unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');

    // var todos = db.collection('Todos').count().then((count) => {
    //     // console.log('Todos');
    //     console.log(`Todos count: ${count}`);
        
    //     // console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    var users = db.collection('Users').find({name: 'Mike'}).toArray().then((docs) => {
        console.log('Users');        
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch users', err);
    });


    db.close();
});