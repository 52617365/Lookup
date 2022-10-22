// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {Db, MongoClient, WithId} from "mongodb";

async function getResultsFromQuery(database: Db, query: string) {
    return database.collection('data').find({$text: {$search: query}}).toArray()
}


/*
   Avoiding manual requests trying to poke with API.
 */

function lookUpModeIsInvalid(mode: string) {
    const allowedModes = ["all", "username", "password", "ipaddress", "facebookid", "linkedin", "zipcode", "phonenumber"]
    return !allowedModes.includes(mode);
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<WithId<Document> | unknown>
) {
    const uri = `mongodb://localhost:27017`
    const client = new MongoClient(uri)
    const database = client.db('lookup');
    try {
        if (req.method !== 'POST') {
            res.status(405).send({message: 'Only POST requests allowed'})
            return
        }
        const body: RequestBody = req.body
        if (body.query == null || body.queryType == null || lookUpModeIsInvalid(body.queryType)) {
            res.status(400).send({message: 'Request body format was invalid'})
            return
        }

        const results = await getResultsFromQuery(database, body.query)
        res.status(200).send({data: results})
    } catch (e) {
        res.status(404).json({data: e})
    } finally {
        await client.close()
    }
}
