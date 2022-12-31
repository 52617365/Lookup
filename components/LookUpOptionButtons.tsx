export default function LookUpOptionButtons({
                                                setLookupOptionState,
                                            }: {
    setLookupOptionState: any;
}) {
    const buttons = ["email", "domain", "name"];
    // We will add more modes here once we figure out what they are.
    return (
        <div className="flex flex-wrap justify-center align-center">
            <div
                className="btn-group w-full justify-center"
                onChange={(e) =>
                    setLookupOptionState((e.target as HTMLInputElement).value)
                }
            >
                {renderButtons(buttons)}
            </div>
        </div>
    );
}

function renderButtons(buttonNames : string[]) {
    return (
        buttonNames.map((buttonName: string) => {
            return (
                <input
                    style={{minWidth: 80}}
                    type="radio"
                    name="options"
                    value={buttonName}
                    data-title={buttonName}
                    className={"btn bg-inherit hover:text-cyan-400"}
                />
            )
        })
    )
}