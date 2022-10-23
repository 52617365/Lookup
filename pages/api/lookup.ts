// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {MongoClient, WithId} from "mongodb";
import userRequestIsInvalid from "../../lib/validateLookupRequest";
import getResultsFromMongo from "../../lib/lookupQuery";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<WithId<Document> | unknown>
) {
    const uri = `mongodb://localhost:27017`
    const client = new MongoClient(uri)
    const database = client.db('lookup')

    if (userRequestIsInvalid(req, res)) {
        return
    }

    try {
        console.log(`${req.body.query} ${req.body.strict} ${req.body.queryType}`)
        const results = await getResultsFromMongo(database, req.body.query, req.body.queryType, req.body.strict)
        res.status(200).send({data: results})
    } catch (e) {
        res.status(404).json({data: e})
    } finally {
        await client.close()
    }
}
