export default function Table() {
    return (
        <div className="overflow-x-auto">
            <div className="indicator">
                <span className="indicator-item badge badge-primary mt-2">database</span>
                <table className="table w-52 border">
                    <thead>
                    <tr>
                        {/* TODO: these should be dynamically rendered */}
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* TODO: these should be dynamically rendered */}
                    <tr>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}