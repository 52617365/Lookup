import DataTable from "../components/DataTable";
import {NavbarTwoColumns} from "../components/navigation/NavbarTwoColumns"
import {AppConfig} from "../components/utils/AppConfig";
import {Meta} from "../components/layout/Meta";
import Link from "next/link";
import {Logo} from "../components/templates/Logo";
import {listData} from "./api/datalist";

function Data({dataList}: { dataList: Array<DatabaseDataFields> }) {
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
    return {
        props: {
            data: await listData(),
        },
    };
}

export default Data;
