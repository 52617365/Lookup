// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {MongoClient, WithId} from "mongodb";

async function listData(client: MongoClient) {
    const database = client.db('lookup');
    return database.collection('databases').find().toArray()
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<WithId<Document> | unknown>
) {
    const uri = `mongodb://localhost:27017`
    const client = new MongoClient(uri)
    try {
        await client.connect();
        const data = await listData(client);
        console.log(data)
        res.status(200).json({data: data})
    } catch (e: any) {
        res.status(404).json({data: e})
    } finally {
        await client.close()
    }
}
