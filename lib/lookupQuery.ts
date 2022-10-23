import {Db} from "mongodb";

/*
    Queries for the following criteria:
    "username", "password", "ipaddress", "facebookid", "linkedin", "zipcode", "phonenumber"
 */


async function getMongoDbResults(database: Db, query: string, strict: boolean, queryType: string) {
    if (strict) {
        return database.collection("data").find({[queryType]: query}, {projection: {_id: 0}}).collation({
            locale: "en",
            strength: 2
        }).limit(500).toArray()
    } else {
        return database.collection("data").find({
            [queryType]: new RegExp(query, "i")
        }, {projection: {_id: 0}}).limit(500).toArray()
    }
}

export default getMongoDbResults
