import type {NextApiRequest, NextApiResponse} from "next";
import {MongoClient, WithId} from "mongodb";
import {listData} from "../../lib/datalist";

const uri = `mongodb://localhost:27017`;
const client = new MongoClient(uri);

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<WithId<Document> | unknown>
) {
    try {
        const data = await listData();
        res.status(200).json({data: data});
    } catch (e: any) {
        res.status(404).json({data: e});
    } finally {
        await client.close();
    }
}