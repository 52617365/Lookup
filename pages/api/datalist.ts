// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
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

// export default async function handler(
//     req: NextApiRequest,
//     res: NextApiResponse<WithId<Document> | unknown>
// ) {
//     try {
//         const data = await listData();
//         res.status(200).json({data: data});
//     } catch (e: any) {
//         res.status(404).json({data: e});
//     } finally {
//         await client.close();
//     }
// }
