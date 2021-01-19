// CRUD create read update delete

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID, ObjectId } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID()
// console.log(id);
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName);

    // db.collection('users').findOne({ _id: new ObjectID('6000a590c976ae2e40e67e97') }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch!')
    //     }

    //     console.log(user);
    // })

    // db.collection('users').find({ age: 26 }).count((error, count) => {
    //     console.log(count);
    // })

    // db.collection('users').findOne({ _id: ObjectID('6004cc52c3daec32e40f2777') }, (error, user) => {
    //     if (error) {
    //         return console.log(error);
    //     }
    //     console.log(user);
    // })

    // db.collection('users').updateOne({
    //     _id: ObjectID('6004cc52c3daec32e40f2777')
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })



})