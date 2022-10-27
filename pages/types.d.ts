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
  name: string;
  lines: string;
  breach_date: string;
  added: string;
};
type RequestBody = {
  strict: boolean;
  queryType: string;
  query: string;
};
type LookupApiResponse = {
  data: Object<any>;
};
