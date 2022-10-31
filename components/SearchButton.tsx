export default function SearchButton({
  isLoading,
  searchButtonHandler,
}: {
  isLoading: boolean;
  searchButtonHandler: any;
}): JSX.Element {
  if (isLoading) {
    return <button className="btn loading w-28"></button>;
  } else {
    return (
      <button onClick={searchButtonHandler} className="btn w-28">
        Search
      </button>
    );
  }
}
