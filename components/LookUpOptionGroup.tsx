export default function LookUpOptionButtons() {
  return (
    <div className="btn-group">
      <input
        type="radio"
        name="options"
        data-title="username"
        className="btn"
      />
      <input
        type="radio"
        name="options"
        data-title="password"
        className="btn"
      />
      <input type="radio" name="options" data-title="email" className="btn" />
      <input type="radio" name="options" data-title="ip" className="btn" />
      <input type="radio" name="options" data-title="domain" className="btn" />
    </div>
  );
}
