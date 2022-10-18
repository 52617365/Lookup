export default function ToggleButton({leftText, rightText}: { leftText: string, rightText: string }) {
    return (
        <div className="form-control">
            <label className="label cursor-pointer">
                <span className={"label-text pr-2"}>{leftText}</span>
                <input type="checkbox" className="toggle" checked/>
                <span className={"label-text pl-2"}>{rightText}</span>
            </label>
        </div>
    )
}