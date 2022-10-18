import {NextPage} from "next/types";
import Topnav from "../components/Topnav";
import TextInput from "../components/TextInput";
import LookupOptions from "../components/LookupOptions";

const Lookup: NextPage = () => {
    const topNavLinks: Array<Options> = [{link: "/data", text: "List of data"}, {link: "/logout", text: "Log out"}]
    return (
        <>
            <Topnav options={topNavLinks}/>
            <LookupOptions/>
            <div className="text-center">
                <TextInput placeholderText="Search for anything"/>
                <button className="btn">Search</button>
            </div>
        </>
    );
};

export default Lookup;
