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
      placeholder={placeholderText}
      className="input input-bordered w-full max-w-xs"
    />
  );
}
