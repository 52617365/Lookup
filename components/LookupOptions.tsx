import { useState } from "react";

function renderStrictOrWildcard(isChecked: boolean) {
  if (isChecked) {
    return <div className="swap-on">Wildcard</div>;
  } else {
    return <div className="swap-off">Strict</div>;
  }
}
export default function LookupOptions({
  isWildcard,
  setWildcard,
}: {
  isWildcard: any;
  setWildcard: any;
}) {
  return (
    <div className="grid h-20 flex-grow card rounded-box place-items-center">
      <div>
        <label className="swap float-left swap-rotate">
          <input type="checkbox" onChange={() => setWildcard(!isWildcard)} />
          {renderStrictOrWildcard(isWildcard)}
        </label>
      </div>
    </div>
  );
}
