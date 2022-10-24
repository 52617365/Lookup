export default function LookUpOptionButtons() {
  return (
    <div className="btn-group">
      <input
        type="radio"
        name="username"
        data-title="username"
        className="btn"
      />
      <input
        type="radio"
        name="password"
        data-title="password"
        className="btn"
      />
      <input type="radio" name="email" data-title="email" className="btn" />
      <input type="radio" name="ipaddress" data-title="ip" className="btn" />
      <input type="radio" name="domain" data-title="domain" className="btn" />
    </div>
  );
}
