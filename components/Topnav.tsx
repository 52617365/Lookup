import Link from "next/link";

export default function Topnav({options}: { options: Array<Options> }) {
    return (
        <>
            <div className="navbar">
                <div className="flex-1">
                    <a className="normal-case text-xl">Lookup - Made by Rase</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0-10">
                        {options.map((option: Options, index: number) => {
                            return (
                                <li key={index}>
                                    <Link href={option.link}>{option.text}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
}
