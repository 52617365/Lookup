export default function SearchButton({
  isLoading,
  searchButtonHandler,
}: {
  isLoading: boolean;
  searchButtonHandler: any; // TODO: figure out the type.
}): JSX.Element {
  if (isLoading === true) {
    return <button className="btn loading"></button>;
  } else {
    return (
      <button onClick={searchButtonHandler} className="btn">
        Search
      </button>
    );
  }
}
