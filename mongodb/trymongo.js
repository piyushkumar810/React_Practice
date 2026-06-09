const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function main() {
    try {
        await client.connect();
        const db = client.db("mydb");
        const users =db.collection("users");

        // insert
        await users.insertOne({
            name: "piyush",
            age:25
        });

        // query
        const user=await users.findOne({
            name:"piyush"
        });

        console.log(users);
        console.log("Connected to MongoDB");

    } finally{
        await client.close();
    }
}

main().catch(console.error)