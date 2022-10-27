import { NextPage } from "next/types";
import { useRef, useState } from "react";
import Topnav from "../components/Topnav";
import TextInput from "../components/TextInput";
import LookupOptions from "../components/LookupOptions";
import LookUpOptionButtons from "../components/LookUpOptionButtons";
import isValidQuery from "../lib/validateQueryOptions";

/* 26.10.2022 - 
Have a function that renders database results, on top of this;
 handle that we have actually fetched to avoid rendering "no results found"
 on page load when user has not even queried yet.

Try to use next.js useSWR to do the fetching from the endpoint.
*/

// TODO: function to render database results into table.

// E.g. show n amount of rows side by side depending on user resolution.
async function requestToEndpoint(
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
      strict: strict,
      query: query,
      queryType: queryType,
    }),
  });
  return await rawResponse.json();
}

const Lookup: NextPage = () => {
  const topNavLinks: Array<Options> = [
    { link: "/data", text: "List of data" },
    { link: "/logout", text: "Log out" },
  ];
  const [lookupOption, setLookupOption] = useState("");
  const [isWildcard, setWildcard] = useState(false);

  const [databaseResults, setResults] = useState([]);
  const [isDatabaseError, setDatabaseError] = useState(false);
  const [buttonIsLoading, setButtonLoading] = useState(false);

  const fetchFromMongo = async (
    query: string,
    queryType: string,
    wildcard: boolean
  ) => {
    setButtonLoading(true);
    try {
      console.log(`strict: ${!wildcard}`);
      const response = await requestToEndpoint(query, queryType, !wildcard);
      setResults(response);
      setDatabaseError(false);
    } catch (_) {
      // TODO: handle this somehow, maybe by putting having an error or something.
      setDatabaseError(true);
    } finally {
      setButtonLoading(false);
    }
  };

  const captureLookUpQueryRef = useRef<HTMLInputElement>(null);
  const searchButtonHandler = async () => {
    const lookupQuery = captureLookUpQueryRef!.current?.value;
    if (!isValidQuery(lookupQuery, lookupOption)) {
      console.log("error fetching"); // TODO: show to user or something.
      return;
    }

    await fetchFromMongo(lookupQuery as string, lookupOption, isWildcard);
    console.log(databaseResults);
  };

  return (
    <>
      <Topnav options={topNavLinks} />
      <LookupOptions isWildcard={isWildcard} setWildcard={setWildcard} />
      <div className="text-center">
        <div className="text-center">
          <LookUpOptionButtons lookupOptionState={setLookupOption} />
        </div>
        <TextInput
          placeholderText="Search for anything"
          inputRef={captureLookUpQueryRef}
        />
        {/*  TODO: there is something wrong with the onClick handler when we submit multiple times.        */}
        <button onClick={searchButtonHandler} className="btn">
          Search
        </button>
        <div className="grid sm:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 pt-5">
          {/* TODO: render the items here into tables here from function*/}
          {/* <div className="...">
            <Table />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Lookup;
