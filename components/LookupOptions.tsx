export default function LookupOptions() {
    // TODO: remember this state in local storage.
    return (
        <div className="grid h-20 flex-grow card rounded-box place-items-center">
            <div>
                <label className="swap float-left">
                    <input type="checkbox"/>
                    <div className="swap-on">Wildcard</div>
                    <div className="swap-off">Strict</div>
                </label>
                <div className={"float-left"}>
                </div>
            </div>
        </div>
    )
}