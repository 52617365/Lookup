import {Db} from "mongodb";

/*
    Queries for the following criteria:
    "username", "password", "ipaddress", "facebookid", "linkedin", "zipcode", "phonenumber"

 */

async function getResultsFromQueryTypeAll(database: Db, query: string, queryType: string, strict: boolean) {
    if (strict) {
        return database.collection("data").find({
            $where: function () {
                return (this.name == "username1")
            }
        })
        // return database.collection("data").find({$text: {$search: `\"${query}\"`}}).limit(1000).toArray()
    } else {
        return database.collection("data").find({$text: {$search: `${query}`}}).limit(1000).toArray()
    }
}

async function getResultsFromUsername(database: Db, query: string, strict: boolean) {
    if (strict) {
        // @ts-ignore
        return database.collection("data").find({username: query}, {projection: {_id: 0}}).collation({
            locale: "en",
            strength: 2
        }).limit(500).toArray()
    } else {
        return database.collection("data").find({
            username: new RegExp(query, "i")
            // @ts-ignore
        }, {projection: {_id: 0}}).collation({
            locale: "en",
            strength: 2
        }).limit(500).toArray()
    }
}

async function getResultsFromPassword(database: Db, query: string, strict: boolean) {

}

async function getResultsFromEmail(database: Db, query: string, strict: boolean) {

}

async function getResultsFromIp(database: Db, query: string, strict: boolean) {

}

async function getResultsFromDomain(database: Db, query: string, strict: boolean) {

}

async function getResultsFromZipcode(database: Db, query: string, strict: boolean) {

}

async function getResultsFromMongo(database: Db, query: string, queryType: string, strict: boolean) {
    switch (queryType) {
        case "username":
            return getResultsFromUsername(database, query, strict)
        case "password":
            break
        case "emailaddress":
            break
        case "ipaddress":
            break
        case "domain":
            break
        case "zipcode":
            break
    }
}

async function getResultsFromQuery(database: Db, query: string) {
    return database.collection('data').find({$text: {$search: query}}).toArray()
}

export default getResultsFromMongo
