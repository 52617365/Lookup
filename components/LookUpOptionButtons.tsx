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
                    className="btn btn-outline btn-sm text-xs"
                />
                <input
                    style={{minWidth: 80}}
                    type="radio"
                    name="options"
                    value={"password"}
                    data-title={"password"}
                    className="btn btn-outline btn-sm text-xs"
                />
                <input
                    style={{minWidth: 80}}
                    type="radio"
                    name="options"
                    value={"email"}
                    data-title={"email"}
                    className="btn btn-outline btn-sm text-xs"
                />
                <input
                    style={{minWidth: 80}}
                    type="radio"
                    name="options"
                    value={"ipaddress"}
                    data-title={"ip"}
                    className="btn btn-outline btn-sm text-xs"
                />
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
                    value={"domain"}
                    data-title={"domain"}
                    className="btn btn-outline btn-sm text-xs border"
                />
                <input
                    style={{minWidth: 80}}
                    type="radio"
                    name="options"
                    value={"fb id"}
                    data-title={"facebookid"}
                    className="btn btn-outline btn-sm text-xs"
                />
                <input
                    style={{minWidth: 80}}
                    type="radio"
                    name="options"
                    value={"name"}
                    data-title={"name"}
                    className="btn btn-outline btn-sm text-xs"
                />
                <input
                    style={{minWidth: 80}}
                    type="radio"
                    name="options"
                    value={"postcode"}
                    data-title={"zipcode"}
                    className="btn btn-outline btn-sm text-xs"
                />
            </div>
        </div>
    );
}
