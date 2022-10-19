// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {MongoClient, WithId} from "mongodb";


type Data = {
    data: WithId<Document> | unknown
}

type DataFormat = {
    databases: Array<DatabaseContents>
}
type DatabaseContents = {
    name: string
}

// TODO: make mongo connection work.
async function listData(client: MongoClient) {
    const database = client.db('lookup');
    const data = database.collection('data');
    console.log(data)
    const query = {_id: '634f964ca0721f16f220d426'};
    return await data.findOne(query)
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
