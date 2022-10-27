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

function renderDatabaseResults(
  results: LookupApiResponse | undefined,
  isFetched: boolean,
  isError: boolean
) {
  if (results == undefined) {
    // I.e. if fetch has not completed yet.
    return;
  }
  if (isError) {
    return <p>There was an error fetching the databases</p>;
  }
  if (results.data.length === 0 && !isFetched) {
    return <></>;
  }
  if (isFetched && results.data.length === 0) {
    return <p>No results found.</p>;
  }

  <div className="sm:grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-4 pt-5"></div>;
  if (results.data.length > 1) {
    return (
      <div className="sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4 pt-5">
        {results.data.map((result: any) => {
          return <Table result={result} />;
        })}
      </div>
    );
  } else {
    return (
      <div className="text-center">
        {results.data.map((result: any) => {
          return <Table result={result} />;
        })}
      </div>
    );
  }
}

const Lookup: NextPage = () => {
  const topNavLinks: Array<Options> = [
    { link: "/data", text: "List of data" },
    { link: "/logout", text: "Log out" },
  ];
  const [lookupOption, setLookupOption] = useState<string>("");
  const [isWildcard, setWildcard] = useState<boolean>(false);

  const [databaseResults, setResults] = useState<LookupApiResponse>(); // TODO: make type for the results.
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
      return;
    }

    setButtonLoading(true);
    setFetched(true);

    try {
      const response = await requestToEndpoint(
        lookupQuery as string,
        lookupOption,
        !isWildcard
      );
      setResults(response);
      setDatabaseError(false);
    } catch (_) {
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
        <div className="">
          <LookUpOptionButtons setLookupOptionState={setLookupOption} />
        </div>
        <TextInput
          placeholderText="Search for anything"
          inputRef={captureLookUpQueryRef}
        />
        <SearchButton
          searchButtonHandler={searchButtonHandler}
          isLoading={buttonIsLoading}
        />
        {renderDatabaseResults(databaseResults, isFetched, isDatabaseError)}
      </div>
    </>
  );
};

export default Lookup;
