function Indicator() {
    return (
        <div className="indicator">
            <span className="indicator-item badge badge-secondary"></span>
            <div className="grid w-32 h-32 bg-base-300 place-items-center">content</div>
        </div>
    )
}

export default function Table() {
    return (
        <div className="overflow-x-auto">
            <table className="table w-52 border">
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                </tr>
                <tr className="active">
                    <th>2</th>
                    <td>Hart Hagerty</td>
                    <td>Desktop Support Technician</td>
                    <td>Purple</td>
                </tr>
                <tr>
                    <th>3</th>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Red</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}