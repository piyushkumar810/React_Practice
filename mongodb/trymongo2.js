const{MongoClient} =require('mongodb');
const uri ='mongodb://127.0.0.1:27017';

const dbName='nodeDB';
const collectionName='emp-collection';

const client=new MongoClient(url);

async function main(){
    try {
        await client.connect();
        console.log('connected successfully to MongoDb');

        const db=client.db(dbName);
        const collection =db.collection(collectionName);

        const insertResult= await collection.insertOne({ id: 1, name: 'Vijalakshmi', age: 24})
        console.log('Document inserted:', insertResult.insertedId);
        const document = await collection.find({}).toArray();
        console.log("document found: ", document);
    }catch (err){
        console.error('an error is occured: ',err);
    }finally{
        await client.close()
    }
}

main().catch(console.error);