import type {NextApiRequest, NextApiResponse} from "next";
import {MongoClient, WithId} from "mongodb";
import userRequestIsValid from "../../lib/validateLookupRequest";

const client = new MongoClient(`mongodb://localhost:27017`);
const database = client.db("lookup");


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<WithId<Document> | unknown>
) {
    if (!userRequestIsValid(req, res)) {
        return;
    }
    try {
        const results = await getResultsFromDatabase(
            req.body.query,
            req.body.queryType
        );
        res.status(200).send({data: results});
    } catch (e) {
        res.status(404).send({data: e});
    }
}

/*
    Queries for the following criteria:
    "username", "password", "ipaddress", "facebookid", "linkedin", "zipcode", "phonenumber"
 */

async function getResultsFromDatabase(query: string, queryType: string) {
    return database.collection("data").find({[queryType]: query}, {projection: {_id: 0}})
        .limit(500).toArray()
}