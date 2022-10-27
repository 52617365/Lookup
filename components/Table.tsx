export default function Table({ result }: { result: any }) {
  const resultDynamicKeys = Object.keys(result);
  const breachDate = result["breachdate"];
  const databaseName = result["database"];

  return (
    <div className="overflow-x-auto">
      <div className="indicator">
        <span className="indicator-item indicator-center badge badge-primary">
          {databaseName}
        </span>
        <span className="indicator-item indicator-bottom indicator-center badge badge-secondary">
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
          </tbody>
        </table>
      </div>
    </div>
  );
}
