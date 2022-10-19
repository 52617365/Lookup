export default function DataTable({dataList}: { dataList: Array<ApiDataFields> }) {
    return (
        <div className="overflow-x-auto">
            <table className="table table-compact w-full">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Breach date</th>
                    <th>Lines</th>
                </tr>
                </thead>
                <tbody>
                {dataList.map((data: ApiDataFields) => {
                    return (
                        <tr>
                            <td>{data.name}</td>
                            <td>{data.breach_date}</td>
                            <td>{data.lines}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}
