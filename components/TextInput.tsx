import { RefObject } from "react";

export default function TextInput({
  placeholderText,
  inputRef,
}: {
  placeholderText: string;
  inputRef: RefObject<HTMLInputElement>;
}) {
  return (
    <input
      ref={inputRef}
      type="text"
      id="lookupquery"
      autoComplete={"off"}
      placeholder={placeholderText}
      className="input input-bordered max-w-md"
    />
  );
}
