import {NextPage} from "next/types";
import {useRef, useState} from "react";
import TextInput from "../components/TextInput";
import LookupOptions from "../components/LookupOptions";
import LookUpOptionButtons from "../components/LookUpOptionButtons";
import isValidQuery from "../lib/validateQueryOptions";
import requestToLookupApi from "../lib/queryEndpoint";
import Table from "../components/Table";
import SearchButton from "../components/SearchButton";
import {NavbarTwoColumns} from "../components/navigation/NavbarTwoColumns"
import {AppConfig} from "../components/utils/AppConfig";
import {Meta} from "../components/layout/Meta";
import {Logo} from "../components/templates/Logo";
import Link from "next/link";


function renderQueryInformation(
    results: LookupApiResponse | undefined,
    isFetched: boolean,
    timeTook: number
) {
    if (results == undefined) {
        // I.e. if fetch has not completed yet.
        return;
    }
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
        return (
            <p>There was an error fetching the databases</p>
        );
    }
    if (results.data.length === 0 && !isFetched) {
        return <></>
    }

    return results.data.map((result: any, index: number) => {
        return <Table index={index} result={result}/>;
    });
}

const Lookup: NextPage = () => {
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
            const response = await requestToLookupApi(
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
            <Meta title={AppConfig.title} description={AppConfig.description}/>
            {/*<Topnav options={topNavLinks}/>*/}
            <NavbarTwoColumns logo={<Logo xl/>}>
                <li className={"mr-5"}>
                    <Link href="/data">
                        Datalist
                    </Link>
                </li>
                <li>
                    <Link href="signOut">Sign out</Link>
                </li>
            </NavbarTwoColumns>
            <LookupOptions isWildcard={isWildcard} setWildcard={setWildcard}/>
            <LookUpOptionButtons setLookupOptionState={setLookupOption}/>
            <div className="flex justify-center">
                <TextInput
                    placeholderText="Search for anything"
                    inputRef={captureLookUpQueryRef}
                />
                <SearchButton
                    searchButtonHandler={searchButtonHandler}
                    isLoading={buttonIsLoading}
                />
            </div>
            {renderQueryInformation(databaseResults, isFetched, timeTook)}
            <div className={"grid m-auto w-5/6"}>
                <div className="flex flex-wrap gap-1 justify-center items-center">
                    {renderDatabaseResults(databaseResults, isFetched, isDatabaseError)}
                </div>
            </div>
        </>
    );
};

export default Lookup;
