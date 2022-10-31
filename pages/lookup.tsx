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

function renderQueryInformation(
  results: LookupApiResponse | undefined,
  isFetched: boolean,
  isError: boolean,
  timeTook: number
) {
  if (results == undefined) {
    // I.e. if fetch has not completed yet.
    return;
  }
  // if (isError) {
  //     return <p>There was an error fetching the databases</p>;
  // }
  if (results.data.length === 0 && !isFetched) {
    return <></>;
  }
  return (
    <div className="flex flex-wrap align-items-center justify-center gap-2 pt-2">
      <p>Results: {results.data.length}</p>
      <p>Query time: {timeTook.toFixed(0)}ms</p>
    </div>
  );
}

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

  return results.data.map((result: any) => {
    return <Table result={result} />;
  });
}

const Lookup: NextPage = () => {
  // if (!isUserLoggedIn()) {
  //   return (
  //     <div className="flex items-center justify-center h-screen flex-wrap">
  //       <Link href="/">You are unauthenticated, please login.</Link>
  //     </div>
  //   );
  // }

  const topNavLinks: Array<Options> = [
    { link: "/data", text: "List of data" },
    { link: "/logout", text: "Log out" }, // log out should maybe have a click handler.
  ];
  const [lookupOption, setLookupOption] = useState<string>("");
  const [isWildcard, setWildcard] = useState<boolean>(false);

  const [databaseResults, setResults] = useState<LookupApiResponse>();
  const [isDatabaseError, setDatabaseError] = useState<boolean>(false);
  const [isFetched, setFetched] = useState<boolean>(false);
  const [buttonIsLoading, setButtonLoading] = useState<boolean>(false);
  const [timeTook, setTimeTook] = useState<number>(0);

  const captureLookUpQueryRef = useRef<HTMLInputElement>(null);
  const searchButtonHandler = async () => {
    if (buttonIsLoading) {
      // to avoid fetching while we fetch.
      return;
    }

    const lookupQuery = captureLookUpQueryRef!.current?.value;
    if (!isValidQuery(lookupQuery, lookupOption)) {
      return;
    }

    setButtonLoading(true);
    setFetched(true);
    try {
      const startTime = performance.now();
      const response = await requestToEndpoint(
        lookupQuery as string,
        lookupOption,
        !isWildcard
      );
      const endTime = performance.now();
      setTimeTook(endTime - startTime);
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
        <div>
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
        {renderQueryInformation(
          databaseResults,
          isFetched,
          isDatabaseError,
          timeTook
        )}
      </div>
      <div
        className={
          "grid justify-center md:grid-cols-3 sm:grid-cols-2 m-auto pt-5 w-5/6 gap-4"
        }
      >
        {/* <div className="flex flex-wrap align-center flex-row gap-4"> */}
        {/* <div className="grid gap-4 align-center justify-center">
          lkjasdflkjasdfl;jkasdfjkl;asdjklasfd
        </div>
        <div className="grid gap-4 align-center justify-center">
          lkjasdflkjasdfl;jkasdfjkl;asdjklasfd
        </div>
        <div className="grid gap-4 align-center justify-center">
          lkjasdflkjasdfl;jkasdfjkl;asdjklasfd
        </div> */}
        {/* </div> */}
        {/* <div className="flex flex-row flex-wrap align-center justify-center gap-4"> */}
        {renderDatabaseResults(databaseResults, isFetched, isDatabaseError)}
      </div>
      {/*</div>*/}
    </>
  );
};

export default Lookup;
