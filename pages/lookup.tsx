import { NextPage } from "next/types";
import { useRef } from "react";
import Topnav from "../components/Topnav";
import TextInput from "../components/TextInput";
import LookupOptions from "../components/LookupOptions";
import Table from "../components/Table";
import { useState } from "react";
import LookUpOptionButtons from "../components/LookUpOptionButtons";

// TODO: the result tables should scale accordingly depending on user resolution.
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

  //   const [databaseResults, setResults] = useState([]);
  //   const [databaseResultError, setError] = useState(false);

  //   const fetchFromMongo = async (
  //     query: string,
  //     queryType: string,
  //     strict: boolean
  //   ) => {
  //     try {
  //       const response = await requestToEndpoint(query, queryType, strict);
  //       setResults(response);
  //       setError(false);
  //       return;
  //     } catch (_) {
  //       setError(true);
  //       return;
  //     }
  //   };

  const captureLookUpQueryRef = useRef<HTMLInputElement>(null);
  const searchButtonHandler = () => {
    const lookupQuery = captureLookUpQueryRef!.current?.value;
    if (lookupQuery == undefined || lookupQuery == "") {
      console.log("no query provided"); // TODO: show to user or something.
      return;
    }
    if (lookupOption == "") {
      console.log("no mode provided"); // TODO: show to user or something.
      return;
    }
    const strictSearch = !isStrict; // We reverse the boolean to be opposite cuz for some reason it's the exact opposite.
    // TODO: query with the settings.
    console.log(`query: ${lookupQuery}`);
    console.log(`option: ${lookupOption}`);
    console.log(`strict: ${!isStrict}`);
  };

  const [isStrict, setStrict] = useState(false);

  return (
    <>
      <Topnav options={topNavLinks} />
      <LookupOptions isStrict={isStrict} setStrict={setStrict} />
      {console.log()}
      <div className="text-center">
        <div className="text-center">
          <LookUpOptionButtons lookupOptionState={setLookupOption} />
        </div>
        <TextInput
          placeholderText="Search for anything"
          inputRef={captureLookUpQueryRef}
        />
        <button onClick={searchButtonHandler} className="btn">
          Search
        </button>
        <div className="grid sm:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 pt-5">
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
