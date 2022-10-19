// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {MongoClient, WithId} from "mongodb";

async function listData(client: MongoClient) {
    const database = client.db('lookup');
    return database.collection('data').find().toArray()
}


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<WithId<Document> | unknown>
) {
    if (req.method !== 'POST') {
        res.status(405).send({message: 'Only POST requests allowed'})
        return
    }
    const body: RequestBody = req.body
}
