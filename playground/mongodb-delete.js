const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
       return console.log('unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');

    // //deleteMany
    // db.collection('Todos').deleteMany({ text: 'Eat lunch' }).then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({ text: 'Eat lunch' }).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
    //     console.log(result);
    // });

    //deleteManyUsers
    // db.collection('Users').deleteMany({ name: 'Ankit' }).then((result) => {
    //     console.log(result);
    // });

    //DeleteByObjectId
    db.collection('Users').findOneAndDelete({ _id: new ObjectID("59f8d9302470e205e0212b2e") }).then((result) => {
        console.log(result);
    });
    // db.close();
});