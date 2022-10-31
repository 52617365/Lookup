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
  { name: "fb id", id: "facebookid" },
  { name: "name", id: "name" },
  { name: "postcode", id: "zipcode" },
];
export default function LookUpOptionButtons({
  setLookupOptionState,
}: {
  setLookupOptionState: any; // TODO: figure out type.
}) {
  // We will add more modes here once we figure out what they are.
  return (
    <div
      className="btn-group"
      onChange={(e) =>
        setLookupOptionState((e.target as HTMLInputElement).value)
      }
    >
      {modes.map((mode: Mode, index: number) => {
        return (
          <input
            key={index}
            type="radio"
            name="options"
            value={mode.id}
            data-title={mode.name}
            className="btn btn-sm text-xs"
          />
        );
      })}
    </div>
  );
}
