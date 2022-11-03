export default function LookUpOptionButtons({
                                                setLookupOptionState,
                                            }: {
    setLookupOptionState: any; // TODO: figure out type.
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
                <input
                    style={{minWidth: 80}}
                    type="radio"
                    name="options"
                    value={"username"}
                    data-title={"username"}
                    className="btn glass btn-sm text-xs hover:bg-gray-200 text-black"
                />
                <input
                    style={{minWidth: 80}}
                    type="radio"
                    name="options"
                    value={"password"}
                    data-title={"password"}
                    className="btn glass btn-sm text-xs hover:bg-gray-200 text-black"
                />
                <input
                    style={{minWidth: 80}}
                    type="radio"
                    name="options"
                    value={"email"}
                    data-title={"email"}
                    className="btn glass btn-sm text-xs hover:bg-gray-200 text-black"
                />
                <input
                    style={{minWidth: 80}}
                    type="radio"
                    name="options"
                    value={"ipaddress"}
                    data-title={"ip"}
                    className="btn glass btn-sm text-xs hover:bg-gray-200 active:bg-blue-600 text-black"
                />
            </div>
            <div
                className="btn-group w-full justify-center"
                onChange={(e) =>
                    setLookupOptionState((e.target as HTMLInputElement).value)
                }
            >
                <input style={{minWidth: 80}}
                       type="radio"
                       name="options"
                       value={"domain"}
                       data-title={"domain"}
                       className="btn glass btn-sm text-xs hover:bg-gray-200 text-black"
                />
                <input
                    style={{minWidth: 80}}
                    type="radio"
                    name="options"
                    value={"fb id"}
                    data-title={"facebookid"}
                    className="btn glass btn-sm text-xs hover:bg-gray-200 text-black"
                />
                <input
                    style={{minWidth: 80}}
                    type="radio"
                    name="options"
                    value={"name"}
                    data-title={"name"}
                    className="btn glass btn-sm text-xs hover:bg-gray-200 text-black"
                />
                <input
                    style={{minWidth: 80}}
                    type="radio"
                    name="options"
                    value={"zipcode"}
                    data-title={"postcode"}
                    className="btn btn-outline btn-sm text-xs hover:bg-gray-200"
                />
            </div>
        </div>
    );
}
