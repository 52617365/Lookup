import ToggleButton from "./Toggle";

export default function LookupOptions() {
    return (
        <div className="grid h-20 flex-grow card rounded-box place-items-center">
            <ToggleButton leftText={"Strict"} rightText={"Wildcard"}/>
        </div>
    )
}