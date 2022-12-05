export default async function requestToLookupApi(
    query: string,
    queryType: string,
    strict: boolean
) {
    const rawResponse = await fetch("http://localhost:3000/api/lookup", {
        //TODO: change url to something real once hosted.
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: query,
            queryType: queryType,
            strict: strict,
        }),
    });
    if (rawResponse.status != 200) {
        throw "there was an error fetching the endpoint"
    }
    return await rawResponse.json();
}
