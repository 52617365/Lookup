import {NextPage} from "next/types";
import Topnav from "../components/Topnav";
import TextInput from "../components/TextInput";
import LookupOptions from "../components/LookupOptions";

const Lookup: NextPage = () => {
    return (
        <>
            <Topnav/>
            <div className="w-full">
                <div className="text-center">
                    <span className={"w-1/3"}>
                        <LookupOptions/>
                    </span>
                    <TextInput placeholderText="Search for anything"/>
                </div>
            </div>
        </>
    );
};

export default Lookup;
