type Options = {
    text: string;
    link: string;
};

type DatabaseApiResponse = {
    data: DatabaseApiData;
};
type DatabaseApiData = {
    data: Array<DatabaseDataFields>;
};
type DatabaseDataFields = {
    database_name: string;
    lines_in_database: string;
    breach_date: string;
    added: string;
};
type RequestBody = {
    queryType: string;
    query: string;
    strict: boolean;
};
type LookupApiResponse = {
    data: Object<any>;
};
