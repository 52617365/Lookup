import { NextPage } from "next/types";
import { useRef, useState } from "react";
import Topnav from "../components/Topnav";
import TextInput from "../components/TextInput";
import LookupOptions from "../components/LookupOptions";
import LookUpOptionButtons from "../components/LookUpOptionButtons";
import isValidQuery from "../lib/validateQueryOptions";
import requestToEndpoint from "../lib/queryEndpoint";
import Table from "../components/Table";
import SearchButton from "../components/SearchButton";

/* 26.10.2022 - 
Have a function that renders database results, on top of this;
 handle that we have actually fetched to avoid rendering "no results found"
 on page load when user has not even queried yet.

Try to use next.js useSWR to do the fetching from the endpoint.
*/

function renderDatabaseResults(
  results: Array<any>,
  isFetched: boolean,
  isError: boolean
) {
  if (isError) {
    <p>There was an error fetching the databases</p>;
  }
  if (results.length === 0 && !isFetched) {
    return <></>;
  }
  if (isFetched && results.length === 0) {
    return <p>No results found.</p>;
  }
  return <p>{results}</p>;
}

const Lookup: NextPage = () => {
  const topNavLinks: Array<Options> = [
    { link: "/data", text: "List of data" },
    { link: "/logout", text: "Log out" },
  ];
  const [lookupOption, setLookupOption] = useState<string>("");
  const [isWildcard, setWildcard] = useState<boolean>(false);

  const [databaseResults, setResults] = useState<Array<any>>([]); // TODO: make type for the results.
  const [isDatabaseError, setDatabaseError] = useState<boolean>(false);
  const [isFetched, setFetched] = useState<boolean>(false);
  const [buttonIsLoading, setButtonLoading] = useState<boolean>(false);

  const captureLookUpQueryRef = useRef<HTMLInputElement>(null);
  const searchButtonHandler = async () => {
    if (buttonIsLoading) {
      // to avoid refetching while we fetch.
      return;
    }

    const lookupQuery = captureLookUpQueryRef!.current?.value;
    if (!isValidQuery(lookupQuery, lookupOption)) {
      console.log("error fetching"); // TODO: show to user or something.
      return;
    }

    setButtonLoading(true);
    setFetched(true);

    try {
      console.log(`strict: ${!isWildcard}`);
      console.log(`query: ${lookupQuery}`);
      console.log(`queryType: ${lookupOption}`);
      const response = await requestToEndpoint(
        lookupQuery as string,
        lookupOption,
        !isWildcard
      );
      setResults(response);
      setDatabaseError(false);
    } catch (_) {
      // TODO: handle this somehow, maybe by putting having an error or something.
      setDatabaseError(true);
    } finally {
      setButtonLoading(false);
    }
  };

  return (
    <>
      <Topnav options={topNavLinks} />
      <LookupOptions isWildcard={isWildcard} setWildcard={setWildcard} />
      <div className="text-center">
        <div className="text-center">
          <LookUpOptionButtons setLookupOptionState={setLookupOption} />
        </div>
        <TextInput
          placeholderText="Search for anything"
          inputRef={captureLookUpQueryRef}
        />
        {/*  TODO: there is something wrong with the onClick handler when we submit multiple times.        */}

        <SearchButton
          searchButtonHandler={searchButtonHandler}
          isLoading={buttonIsLoading}
        />

        {/* <button onClick={searchButtonHandler} className="btn">
          Search
        </button> */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4 pt-5">
          {/* TODO: render the items here into tables here from function*/}
          {/* {renderDatabaseResults(databaseResults)} */}
          {/* <div className="...">
            <Table />
          </div>
          <div className="...">
            <Table />
          </div>
          <div className="...">
            <Table />
          </div>
          <div className="...">
            <Table />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Lookup;
