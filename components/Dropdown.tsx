export default function Dropdown({
                                     dropdownText,
                                     dropdownItems,
                                 }: {
    dropdownText: string;
    dropdownItems: string[];
}) {
    return (
        <div className="dropdown">
            <label tabIndex={0} className="btn m-1">
                {dropdownText}
            </label>
            <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
                {dropdownItems.map((dropdownItem: string, index: number) => {
                    return (
                        <li key={index}>
                            <a>{dropdownItem}</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
