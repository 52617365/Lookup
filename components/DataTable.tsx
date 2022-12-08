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
                    const timeAddedDate = data.added.split("T")[0]
                    return (
                        <tr key={index}>
                            <td>{data.database_name}</td>
                            {renderBreachDate(data.breach_date)}
                            <td>{data.lines_in_database}</td>
                            <td>{timeAddedDate}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
}

function renderBreachDate(breachDate: string) {
    if (breachDate == null) {
        return <td>unknown</td>
    }
    return <td>{breachDate}</td>
}
