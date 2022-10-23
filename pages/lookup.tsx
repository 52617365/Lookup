import {NextPage} from "next/types";
import Topnav from "../components/Topnav";
import TextInput from "../components/TextInput";
import LookupOptions from "../components/LookupOptions";
import Table from "../components/Table";
import {useState} from "react";

async function requestToEndpoint(query: string, queryType: string, strict: boolean) {
    const rawResponse = await fetch('http://localhost:3000/api/lookup', { //TODO: change url to something real once hosted.
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({strict: strict, query: query, queryType: queryType})
    });
    return await rawResponse.json()
}

const Lookup: NextPage = () => {
    const topNavLinks: Array<Options> = [{link: "/data", text: "List of data"}, {link: "/logout", text: "Log out"}]
    const [databaseResults, setResults] = useState([])
    const [databaseResultError, setError] = useState(false)
    const fetchFromMongo = async (query: string, queryType: string, strict: boolean) => {
        try {
            const response = await requestToEndpoint(query, queryType, strict)
            setResults(response)
            setError(false)
            return
        } catch (_) {
            setError(true)
            return
        }
    }

    return (
        <>
            <Topnav options={topNavLinks}/>
            <LookupOptions/>
            <div className="text-center">
                <TextInput placeholderText="Search for anything"/>
                <button className="btn" onClick={() => fetchFromMongo("todo", "todo", false)}>Search</button>
                {/*TODO: set parameters here*/}
                <div className="grid grid-cols-2 gap-4 pt-5">
                    <div className="...">
                        <Table/>
                    </div>
                    <div className="...">
                        <Table/>
                    </div>
                    <div className="...">
                        <Table/>
                    </div>
                    <div className="...">
                        <Table/>
                    </div>
                    <div className="...">
                        <Table/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Lookup;
