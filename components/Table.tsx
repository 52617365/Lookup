function renderBreachDate(breachDate: string) {
    if (breachDate == null) {
        return <></>;
    }
    return (
        <span className="indicator-item indicator-bottom indicator-center badge badge-secondary w-max">
      {breachDate}
    </span>
    );
}

function renderDatabaseName(databaseName: string) {
    if (databaseName == null) {
        return <></>;
    }
    return (
        <span className="indicator-item indicator-center badge badge-primary w-max">
      {databaseName}
    </span>
    );
}

export default function Table({result}: { result: any }) {
    const resultDynamicKeys = Object.keys(result);
    const breachDate = result["breachdate"];
    const databaseName = result["database"];

    return (
        <div className="overflow-x-auto pt-5 pb-5">
            <div className="indicator">
                {/*{renderDatabaseName(databaseName)}*/}
                {/*{renderBreachDate(breachDate)}*/}
                <table className="table table-compact w-full border">
                    <tbody>
                    {resultDynamicKeys.map((dynamicKey: string) => {
                        // if (!(dynamicKey == "database" || dynamicKey == "breachdate")) {
                        // we don't want to render these because they're already in the indicators.
                        return (
                            <tr>
                                <td className="font-serif">{dynamicKey}:</td>
                                <td>{result[dynamicKey]}</td>
                            </tr>
                        );
                        // }
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
