import {NextPage} from "next/types";
import Topnav from "../components/Topnav";
import TextInput from "../components/TextInput";
import LookupOptions from "../components/LookupOptions";
import Table from "../components/Table";

const Lookup: NextPage = () => {
    const topNavLinks: Array<Options> = [{link: "/data", text: "List of data"}, {link: "/logout", text: "Log out"}]
    return (
        <>
            <Topnav options={topNavLinks}/>
            <LookupOptions/>
            <div className="text-center">
                <TextInput placeholderText="Search for anything"/>
                <button className="btn">Search</button>
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
