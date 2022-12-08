import {MongoClient} from "mongodb";

const uri = `mongodb://localhost:27017`;
const client = new MongoClient(uri);

export async function listData() {
    await client.connect();
    const database = client.db("lookup");
    return database
        .collection("databases")
        .find({}, {projection: {_id: 0}})
        .toArray();
}
