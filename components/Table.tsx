import {useState} from "react";
import {Snackbar} from "@mui/material";

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

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function Table({result}: { result: any }) {
    const [copied, setCopied] = useState(false)
    const resultDynamicKeys = Object.keys(result);
    // const breachDate = result["breachdate"];
    // const databaseName = result["database"];

    async function copyText(textToCopy: string) {
        setCopied(true)
        await navigator.clipboard.writeText(textToCopy)
    }

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
                            <>
                                <div>
                                    <Snackbar
                                        message="Copied to clipboard"
                                        anchorOrigin={{vertical: "top", horizontal: "center"}}
                                        autoHideDuration={500}
                                        onClose={() => setCopied(false)}
                                        open={copied}
                                    />
                                </div>
                                <div>
                                    <tr>
                                        <td className="font-serif">{dynamicKey}:</td>
                                        <td onClick={() => copyText(result[dynamicKey])}>{result[dynamicKey]}</td>
                                    </tr>
                                </div>
                            </>
                        );
                        // }
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
