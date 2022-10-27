export default function Table() {
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
            {/* TODO: these should be dynamically rendered */}
            <tr>
              <td className="font-serif">username:</td>
              <td>Cy Ganderton</td>
            </tr>
            <tr>
              <td className="font-serif">password:</td>
              <td>Quality Control Specialist</td>
            </tr>
            <tr>
              <td className="font-serif">email:</td>
              <td>asd</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
