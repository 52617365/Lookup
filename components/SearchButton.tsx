export default function SearchButton({
  isLoading,
  searchButtonHandler,
}: {
  isLoading: boolean;
  searchButtonHandler: any;
}): JSX.Element {
  if (isLoading) {
    return <button className="btn loading w-18"></button>;
  } else {
    return (
      <button onClick={searchButtonHandler} className="btn w-24">
        Search
      </button>
    );
  }
}
