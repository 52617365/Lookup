import {Db} from "mongodb";

/*
    Queries for the following criteria:
    "all", "username", "password", "ipaddress", "facebookid", "linkedin", "zipcode", "phonenumber"

 */

// TODO: make this first.
async function getResultsFromQueryTypeAll(database: Db, query: string, strict: boolean) {
    if (strict) {
        return database.collection("data").find({$text: {$search: `\"${query}\"`}}).limit(1000).toArray()
    } else {
        return database.collection("data").find({$text: {$search: `${query}`}}).limit(1000).toArray()
    }
}

async function getResultsFromQuery(database: Db, query: string) {
    return database.collection('data').find({$text: {$search: query}}).toArray()
}

export default getResultsFromQueryTypeAll
