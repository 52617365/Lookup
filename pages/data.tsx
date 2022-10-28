import DataTable from "../components/DataTable";
import Topnav from "../components/Topnav";

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
        <>
            <Topnav options={topNavLinks}/>
            <DataTable dataList={dataList}/>
        </>
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
