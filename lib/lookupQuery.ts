import {Db} from "mongodb";

async function getResultsFromQuery(database: Db, query: string) {
    return database.collection('data').find({$text: {$search: query}}).toArray()
}
