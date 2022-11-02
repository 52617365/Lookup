export default function DataTable({
                                      dataList,
                                  }: {
    dataList: Array<DatabaseDataFields>;
}) {
    return (
        <div className="overflow-x-auto">
            <table className="table table-compact w-full">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Breach date</th>
                    <th>Lines</th>
                    <th>Added to lookup</th>
                </tr>
                </thead>
                <tbody>
                {dataList.map((data: DatabaseDataFields, index: number) => {
                    const timeAddedToDate = new Date(data.added);
                    const timeAddedToLookupFormatted = `${timeAddedToDate.getDay()}.${timeAddedToDate.getMonth()}.${timeAddedToDate.getFullYear()}`;
                    return (
                        <tr key={index}>
                            <td>{data.name}</td>
                            <td>{data.breach_date}</td>
                            <td>{data.lines}</td>
                            <td>{timeAddedToLookupFormatted}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
}
