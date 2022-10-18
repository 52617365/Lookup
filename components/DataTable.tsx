export default function DataTable() {
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
                <tr>
                    <td>Database 1</td>
                    <td>18.10.2022</td>
                    <td>822,822</td>
                </tr>
                <tr>
                    <td>Database 2</td>
                    <td>28.10.2022</td>
                    <td>1,822,822</td>
                </tr>
                <tr>
                    <td>Database 3</td>
                    <td>02.11.2022</td>
                    <td>1,222,822</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}
