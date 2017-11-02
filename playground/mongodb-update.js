const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
       return console.log('unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');

    //findOneAndUpdate
    // db.collection('Todos').findOneAndUpdate({ _id: new ObjectID("59fb440737c27a0c1c71c0f9") }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({ name: 'Ankit' },
    {
        $set: {
            name: 'Ankit'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
    db.close();
});