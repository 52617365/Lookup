export default function TextInput({
  placeholderText,
  inputRef,
}: {
  placeholderText: string;
  inputRef: any;
}) {
  return (
    <input
      ref={inputRef}
      type="text"
      id="lookupquery"
      autoComplete={"off"}
      placeholder={placeholderText}
      className="input input-bordered w-full max-w-xs"
    />
  );
}
