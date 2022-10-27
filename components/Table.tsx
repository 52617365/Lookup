export default function Table({ result }: { result: any }) {
  const resultDynamicKeys = Object.keys(result);
  const breachDate = result["breachdate"];
  const databaseName = result["database"];

  return (
    // TODO: add sizing depending on resolution here onto tables, else it goes off of the screen on mobile.
    // This is definitely not a priority though.
    <div className="overflow-x-auto">
      <div className="indicator">
        {/* TODO: these should be dynamic */}
        <span className="indicator-item badge badge-primary mt-2.5">
          {databaseName}
        </span>
        <span className="indicator-item indicator-bottom badge badge-secondary mb-2.5">
          {breachDate}
        </span>
        <table className="table table-compact w-full border">
          <tbody>
            {resultDynamicKeys.map((dynamicKey: string) => {
              if (!(dynamicKey == "database" || dynamicKey == "breachdate")) {
                return (
                  <tr>
                    <td className="font-serif">{dynamicKey}:</td>
                    <td>{result[dynamicKey]}</td>
                  </tr>
                );
              }
            })}
            {/* TODO: these should be dynamically rendered */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
