export default function Table({ result }: { result: any }) {
  const resultDynamicKeys = Object.keys(result);
  return (
    // TODO: add sizing depending on resolution here onto tables, else it goes off of the screen on mobile.
    // This is definitely not a priority though.
    <div className="overflow-x-auto">
      <div className="indicator">
        {/* TODO: these should be dynamic */}
        <span className="indicator-item badge badge-primary mt-2.5">
          database
        </span>
        <span className="indicator-item indicator-bottom badge badge-secondary mb-2.5">
          2019
        </span>
        <table className="table table-compact w-full border">
          <tbody>
            {resultDynamicKeys.map((dynamicKey: string) => {
              return (
                <tr>
                  <td className="font-serif">{dynamicKey}:</td>
                  <td>{result[dynamicKey]}</td>
                </tr>
              );
            })}
            {/* TODO: these should be dynamically rendered */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
