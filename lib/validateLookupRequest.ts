import {NextApiRequest, NextApiResponse} from "next";
import {WithId} from "mongodb";


function userRequestIsValid(
    req: NextApiRequest,
    res: NextApiResponse<WithId<Document> | unknown>
): boolean {
    if (!requestTypeIsPost(req, res)) {
        return false;
    }
    if (!requestBodyIsValid(req, res)) {
        return false;
    }
    if (!req.body.scrict) {
        res.status(404).send({data: "Full text search is not implemented yet."});
    }
    return true;
}

function requestTypeIsPost(
    req: NextApiRequest,
    res: NextApiResponse<WithId<Document> | unknown>
): boolean {
    if (req.method !== "POST") {
        res.status(404).send({data: "Invalid request"});
        return false;
    }
    return true;
}

function requestBodyIsValid(
    req: NextApiRequest,
    res: NextApiResponse<WithId<Document> | unknown>
): boolean {
    const body: RequestBody = req.body;
    if (!queryIsValid(body.query) || !queryTypeIsValid(body.queryType)) {
        res.status(404).send({data: "Invalid request"});
        return false;
    }
    return true
}


function queryIsValid(query: string) {
    if (query == null || query == "" || onlySpaces(query)) {
        return false;
    }
    return true
}


function queryTypeIsValid(queryType: string) {
    if (queryType == null || queryType == "" || onlySpaces(queryType) || !lookupModeIsSupported(queryType)) {
        return false;
    }
    return true;
}

function onlySpaces(stringToCheck: string) {
    return stringToCheck.trim().length === 0;
}

function lookupModeIsSupported(queryType: string): boolean {
    const allowedModes = [
        // "username",
        // "password",
        "email",
        // "ipaddress",
        // "facebookid",
        "domain",
        // "zipcode",
        "name"
    ];
    if (allowedModes.includes(queryType)) {
        return true;
    }
    return false;
}

export default userRequestIsValid;
