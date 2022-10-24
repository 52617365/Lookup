type Mode = {
  name: string;
  id: string;
};

// The ids here should be the same as the fields in db so we don't have to handle that later.
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
export default function LookUpOptionButtons({
  lookupOptionState,
}: {
  lookupOptionState: any;
}) {
  // We will add more modes here once we figure out what they are.
  return (
    <div
      className="btn-group"
      onChange={(e) => lookupOptionState((e.target as HTMLInputElement).value)}
    >
      {modes.map((mode: Mode) => {
        return (
          <input
            type="radio"
            name="options"
            value={mode.id}
            data-title={mode.name}
            className="btn"
          />
        );
      })}
    </div>
  );
}
