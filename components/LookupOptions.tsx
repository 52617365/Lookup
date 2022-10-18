export default function LookupOptions() {
    // TODO: remember this state in local storage.
    return (
        <div className="grid h-20 flex-grow card rounded-box place-items-center">
            <div>
                <p className={"inline-block pl-2"}>Strict</p>
                <label className="swap float-left">
                    <input type="checkbox"/>
                    <div className="swap-on">ON</div>
                    <div className="swap-off">OFF</div>
                </label>
                <div className={"float-left"}>
                </div>
            </div>
        </div>
    )
}