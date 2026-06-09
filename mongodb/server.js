const {Mongoclient} = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new Mongoclient(uri);

const dbName = 'nodeDB';
const collectionName = 'my-collection';

const client = new Mongoclient(uri);

async function main() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        const documents=[
            { name: 'Alice', age: 30,city:'pune' },
            { name: 'Bob', age: 25,city:'mumbai' },
            { name: 'Charlie', age: 35,city:'delhi' },
            { name: 'David', age: 28,city:'chennai' },
            { name: 'Eve', age: 22,city:'kolkata' }
        ],

        const insertResult = await collection.insertMany(documents);
        console.log('Inserted IDs:', insertResult.insertedIds)} catch (err) {
        console.error(err);
    }

}