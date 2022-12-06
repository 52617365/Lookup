export function onlySpaces(stringToCheck: string) {
    return stringToCheck.trim().length === 0;
}

export default function isValidQuery(
    lookupQuery: string | undefined,
    lookupOption: string
): boolean {
    if (lookupQuery === "" || lookupOption === "") {
        return false
    }
    if (lookupQuery == undefined || lookupOption == undefined) {
        return false
    }
    if (onlySpaces(lookupQuery) || onlySpaces(lookupOption)) {
        return false
    }
    return true;
}
