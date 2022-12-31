export default function LookUpOptionButtons({
                                                setLookupOptionState,
                                            }: {
    setLookupOptionState: any;
}) {
    // We will add more modes here once we figure out what they are.
    return (
        <div className="flex flex-wrap justify-center align-center">
            <div
                className="btn-group w-full justify-center"
                onChange={(e) =>
                    setLookupOptionState((e.target as HTMLInputElement).value)
                }
            >
            </div>
            <div
                className="btn-group w-full justify-center"
                onChange={(e) =>
                    setLookupOptionState((e.target as HTMLInputElement).value)
                }
            >
                <input
                    style={{minWidth: 80}}
                    type="radio"
                    name="options"
                    value={"email"}
                    data-title={"email"}
                    // className="btn glass btn-sm text-xs text-black"
                    className={"btn bg-inherit hover:text-cyan-400"}
                />
                <input style={{minWidth: 80}}
                       type="radio"
                       name="options"
                       value={"domain"}
                       data-title={"domain"}
                       className={"btn bg-inherit hover:text-cyan-400"}
                />
                <input
                    style={{minWidth: 80}}
                    type="radio"
                    name="options"
                    value={"name"}
                    data-title={"name"}
                    className={"btn bg-inherit hover:text-cyan-400"}
                />
            </div>
        </div>
    );
}
