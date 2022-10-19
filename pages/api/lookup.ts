// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {MongoClient} from "mongodb";


// TODO: make mongo connection work.
async function listData(client: MongoClient) {
    const database = client.db('lookup');
    const collection = database.collection('data');
    const data = collection.find()
    return data
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const uri = `mongodb+srv://localhost/`
    const client = new MongoClient(uri)
    try {
        await client.connect();
        const data = await listData(client);
        res.status(200).json({data: data})
    } catch (e: any) {
        res.status(404).json({data: e})
    } finally {
        await client.close()
    }
}
