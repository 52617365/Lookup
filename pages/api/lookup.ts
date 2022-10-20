// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {MongoClient, WithId} from "mongodb";

async function getResultsFromQuery(client: MongoClient, query: string) {
    const database = client.db('lookup');
    return database.collection('data').find({$text: {$search: query}}).toArray()
}


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<WithId<Document> | unknown>
) {
    const uri = `mongodb://localhost:27017`
    const client = new MongoClient(uri)
    try {
        if (req.method !== 'POST') {
            res.status(405).send({message: 'Only POST requests allowed'})
            return
        }
        const body: RequestBody = req.body
        if (body.query == null) {
            res.status(400).send({message: 'Request body format was invalid'})
            return
        }
        const results = await getResultsFromQuery(client, body.query)
        res.status(200).send({message: results})
    } catch (e) {
        res.status(404).json({data: e})
    } finally {
        await client.close()
    }
}
