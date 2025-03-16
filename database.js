const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const URL = "mongodb+srv://namastedev:ISRd41ZnkVDogYew@namastenode.e75od.mongodb.net/";
const client = new MongoClient(URL);                                                        // New Client Object

// Database Name
const dbName = 'HelloWorld';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('User');
  
    // the following code examples can be pasted here...

    // Read
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);

    // Insert
    const data = {
        name: 'John Doe',
        age: 30,
        status: 'active'
    }

    const insert = await collection.insertOne(data);
    console.log('Inserted documents =>', insert);

    // // Update
    const update = await collection.updateOne({name: 'John Doe'}, { $set: {age: 25}});
    console.log('Updated documents =>', update);

    // Count
    const count = await collection.countDocuments({});
    console.log('Count documents =>', count);
  
    return 'done.';
  }

  main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

// Go to mongodb website
// Create a free MongoDB cluster
// Create a user
// Get a connection string
// Install MongoDB compass
// Connect to the database using the connection string
// Document => Collection => Database
// CRUD Operations
