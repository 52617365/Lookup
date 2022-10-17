export default function Topnav() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="normal-case text-xl">Lookup</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a>List of data</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
