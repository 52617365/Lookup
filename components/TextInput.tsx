export default function TextInput({
                                      placeholderText,
                                  }: {
    placeholderText: string;
}) {
    return (
        <input
            type="text"
            placeholder={placeholderText}
            className="input input-bordered w-full max-w-xs"
        />
    );
}
