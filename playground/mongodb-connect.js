const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err)
        return console.log('unable to connect to database.')
    console.log('connected to mongo server.');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5a394e4bde7f6717cc4d26f3')
    // }).toArray().then((docs)=>{
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('cant find with id 5a394e4bde7f6717cc4d26f3');
    // });

    db.collection('Todos').find().count().then((count)=>{
        console.log(`there are ${count} entries.`);
    },(err)=>{
        console.log('cant find anything');
    });

    // db.collection('Todos').find({text: 'something to do',completed:true}).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('unable to fetch Todos',err);
    // });

    // db.collection('Todos').insertOne({
    //     text: 'Complete the node tutorial',
    //     completed: false
    // },(err,result)=>{
    //     if(err)
    //         return console.log('Unable to insert data',err);
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
    // });

    // db.collection('Users').insertOne({
    //     _id: 2,
    //     name: 'Gopal',
    //     age: 23,
    //     location: 'r 12/6b'
    // },(err,result)=>{
    //     if(err)
    //         return console.log('unabe to insert in users');
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });
    db.close();
});