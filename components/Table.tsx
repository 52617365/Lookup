import {useState} from "react";
import {Snackbar} from "@mui/material";

export default function Table({
                                  result,
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
        <div style={{minWidth: 300}} className="mt-5 mb-5">
            <table className="table table-compact border m-auto w-full">
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
                                    <td className="font-serif w-full">{dynamicKey}:</td>
                                    <td onClick={() => copyText(result[dynamicKey])}>
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
