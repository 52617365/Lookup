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
    <div className="flex flex-wrap justify-center align-center">
      <div
        className="btn-group w-full justify-center"
        onChange={(e) =>
          setLookupOptionState((e.target as HTMLInputElement).value)
        }
      >
        <input
          style={{ minWidth: 80 }}
          type="radio"
          name="options"
          value={"username"}
          data-title={"username"}
          className="btn btn-sm text-xs"
        />
        <input
          style={{ minWidth: 80 }}
          type="radio"
          name="options"
          value={"password"}
          data-title={"password"}
          className="btn btn-sm text-xs"
        />
        <input
          style={{ minWidth: 80 }}
          type="radio"
          name="options"
          value={"email"}
          data-title={"email"}
          className="btn btn-sm text-xs"
        />
        <input
          style={{ minWidth: 80 }}
          type="radio"
          name="options"
          value={"ipaddress"}
          data-title={"ip"}
          className="btn btn-sm text-xs"
        />
      </div>
      <div
        className="btn-group w-full justify-center"
        onChange={(e) =>
          setLookupOptionState((e.target as HTMLInputElement).value)
        }
      >
        <input
          style={{ minWidth: 80 }}
          type="radio"
          name="options"
          value={"domain"}
          data-title={"domain"}
          className="btn btn-sm text-xs"
        />
        <input
          style={{ minWidth: 80 }}
          type="radio"
          name="options"
          value={"fb id"}
          data-title={"facebookid"}
          className="btn btn-sm text-xs"
        />
        <input
          style={{ minWidth: 80 }}
          type="radio"
          name="options"
          value={"name"}
          data-title={"name"}
          className="btn btn-sm text-xs"
        />
        <input
          style={{ minWidth: 80 }}
          type="radio"
          name="options"
          value={"postcode"}
          data-title={"zipcode"}
          className="btn btn-sm text-xs"
        />

        {/* {modes.map((mode: Mode, index: number) => {
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
        })} */}
      </div>
    </div>
  );
}
