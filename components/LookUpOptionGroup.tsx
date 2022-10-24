type Mode = {
  name: string;
  id: string;
};
const modes: Array<Mode> = [
  { name: "username", id: "username" },
  {
    name: "password",
    id: "password",
  },
  { name: "email", id: "email" },
  { name: "ip", id: "ipaddress" },
  { name: "domain", id: "domain" },
];
export default function LookUpOptionButtons() {
  // We will add more modes here once we figure out what they are.
  return (
    <div className="btn-group">
      {modes.map((mode: Mode) => {
        return (
          <input
            type="radio"
            name="options"
            id={mode.id}
            data-title={mode.name}
            className="btn"
          />
        );
      })}
    </div>
  );
}
