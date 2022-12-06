import {ObjectId} from "mongodb";

export async function getResultsFromDatabase(query: string, queryType: string) {
    return ([{
        id: new ObjectId("60f1b5b0b9b5b8b1b8b1b8b1"),
        username: "hello",
    }])
}

