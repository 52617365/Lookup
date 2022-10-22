type Options = {
    text: string
    link: string
}

type LookupApiResponse = {
    data: LookupApiData
}
type LookupApiData = {
    data: Array<ApiDataFields>
}
type ApiDataFields = {
    _id: string
    name: string
    lines: string
    breach_date: string
    data: Array<object>
}
type RequestBody = {
    strict: boolean
    queryType: string
    query: string
}
