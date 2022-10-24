export default function LookUpOptionButtons() {
  // We will add more modes here once we figure out what they are.
  const modes = ["username", "password", "email", "ipaddress", "domain"];
  return (
    <div className="btn-group">
      {modes.map((mode: string) => {
        return (
          <input
            type="radio"
            name="options"
            id={mode}
            data-title={mode}
            className="btn"
          />
        );
      })}
    </div>
  );
}
