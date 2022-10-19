type Data = {
    data: WithId<Document> | unknown
}

type DataFormat = {
    databases: Array<DatabaseContents>
}
type DatabaseContents = {
    name: string
}
