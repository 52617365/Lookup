import {NextPage} from "next/types";
import Topnav from "../components/Topnav";
import TextInput from "../components/TextInput";
import LookupOptions from "../components/LookupOptions";

const Lookup: NextPage = () => {
    return (
        <>
            <Topnav/>
            <LookupOptions/>
            <div className="text-center">
                <TextInput placeholderText="Search for anything"/>
                <button className="btn">Search</button>
            </div>
        </>
    );
};

export default Lookup;
