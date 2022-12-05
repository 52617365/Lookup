import {NextApiRequest, NextApiResponse} from "next";
import {WithId} from "mongodb";


export function userRequestIsValid(
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
        return false;
    }
    return true;
}

export function requestTypeIsPost(
    req: NextApiRequest,
    res: NextApiResponse<WithId<Document> | unknown>
): boolean {
    if (req.method !== "POST") {
        res.status(404).send({data: "Invalid request"});
        return false;
    }
    return true;
}

export function requestBodyIsValid(
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


export function queryIsValid(query: string) {
    if (isValidInput(query)) {
        return true;
    }
    return false
}


export function queryTypeIsValid(queryType: string) {
    if (isValidInput(queryType) && lookupModeIsSupported(queryType)) {
        return true;
    }
    return false;
}

export function isValidInput(userInput: string) {
    if (userInput == null || userInput == "" || onlySpaces(userInput)) {
        return false;
    }
    return true
}

export function onlySpaces(stringToCheck: string) {
    return stringToCheck.trim().length === 0;
}

export function lookupModeIsSupported(queryType: string): boolean {
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
