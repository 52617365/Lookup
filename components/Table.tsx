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

export default function Table({
                                  result,
                                  index,
                              }: {
    result: any;
    index: number;
}) {
    const [copied, setCopied] = useState(false);
    const resultDynamicKeys = Object.keys(result);

    async function copyText(textToCopy: string) {
        setCopied(true);
        await navigator.clipboard.writeText(textToCopy);
    }

    return (
        <div style={{minWidth: 300}} className="pt-5 pb-5">
            <table className="table table-compact border m-auto">
                <tbody>
                {resultDynamicKeys.map((dynamicKey: string) => {
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
                                    <td className="font-serif">{dynamicKey}</td>
                                    <td className="w-full" onClick={() => copyText(result[dynamicKey])}>
                                        {result[dynamicKey]}
                                    </td>
                                </tr>
                            </div>
                        </>
                    );
                })}
                </tbody>
            </table>
        </div>
        // </div>
    );
}
