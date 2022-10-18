import {NextPage} from "next/types";
import DataTable from "../components/DataTable";
import Topnav from "../components/Topnav";
// TODO: Statically render maybe?
const Data: NextPage = () => {
    const topNavLinks: Array<Options> = [{link: "/lookup", text: "Lookup"}, {link: "/logout", text: "Log out"}]
    return (
        <>
            <Topnav options={topNavLinks}/>
            <DataTable/>
        </>
    )
}

export default Data;
