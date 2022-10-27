// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, WithId } from "mongodb";
import userRequestIsInvalid from "../../lib/validateLookupRequest";
import getMongoDbResults from "../../lib/lookupQuery";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<WithId<Document> | unknown>
) {
  const uri = `mongodb://localhost:27017`;
  const client = new MongoClient(uri);
  const database = client.db("lookup");

  if (userRequestIsInvalid(req, res)) {
    return;
  }
  try {
    const results = await getMongoDbResults(
      database,
      req.body.query,
      req.body.strict,
      req.body.queryType
    );
    res.status(200).send({ data: results });
  } catch (e) {
    res.status(404).send({ data: e });
  } finally {
    await client.close();
  }
}
