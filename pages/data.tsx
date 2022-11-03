import DataTable from "../components/DataTable";
import {NavbarTwoColumns} from "../components/navigation/NavbarTwoColumns"
import {AppConfig} from "../components/utils/AppConfig";
import {Meta} from "../components/layout/Meta";
import Link from "next/link";
import {Logo} from "../components/templates/Logo";

function Data({dataList}: { dataList: Array<DatabaseDataFields> }) {
    // if (!isUserLoggedIn()) {
    //   return (
    //     <div className="flex items-center justify-center h-screen flex-wrap">
    //       <Link href="/">You are unauthenticated, please login.</Link>
    //     </div>
    //   );
    // }
    const topNavLinks: Array<Options> = [
        {link: "/lookup", text: "Lookup"},
        {link: "/logout", text: "Log out"},
    ];
    return (
        <div>
            <Meta title={AppConfig.title} description={AppConfig.description}/>

            <NavbarTwoColumns logo={<Logo xl/>}>
                <li className={"mr-5"}>
                    <Link href="/lookup">Lookup</Link>
                </li>
                <li>
                    <Link href="signOut">Sign out</Link>
                </li>
            </NavbarTwoColumns>
            <DataTable dataList={dataList}/>
        </div>
    );
}

export async function getStaticProps() {
    const res = await fetch("http://localhost:3000/api/datalist"); // This will not be used for users so TODO: restrict it to only here.
    const deserialized: DatabaseApiResponse = await res.json();
    const dataList = deserialized.data;

    return {
        props: {
            dataList,
        },
    };
}

export default Data;
