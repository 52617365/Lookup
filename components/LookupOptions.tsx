export default function LookupOptions() {
  return (
    <div className="grid h-20 flex-grow card rounded-box place-items-center">
      <div>
        <label className="swap float-left swap-rotate">
          <input type="checkbox" />
          <div className="swap-on">Wildcard</div>
          <div className="swap-off">Strict</div>
        </label>
      </div>
    </div>
  );
}
