import {onlySpaces} from './FrontEndValidation';

export function userRequestIsValid(
    body: RequestBody,
    method: string | undefined
): boolean {
    if (!requestTypeIsPost(method)) {
        return false;
    }
    if (!requestBodyIsValid(body)) {
        return false;
    }
    if (!body.strict) {
        return false;
    }

    return true;
}

export function requestTypeIsPost(
    method: string | undefined,
): boolean {
    if (method !== "POST") {
        return false;
    }
    return true;
}

export function requestBodyIsValid(
    body: RequestBody,
): boolean {
    if (!queryIsValid(body.query) || !queryTypeIsValid(body.queryType)) {
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
