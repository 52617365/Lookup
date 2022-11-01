import { RefObject } from "react";

export default function TextInput({
  placeholderText,
  inputRef,
}: {
  placeholderText: string;
  inputRef: RefObject<HTMLInputElement>;
}) {
  return (
    <div className="flex justify-center">
      <input
        ref={inputRef}
        type="text"
        id="lookupquery"
        autoComplete={"off"}
        placeholder={placeholderText}
        className="input input-bordered w-full max-w-md"
      />
    </div>
  );
}
