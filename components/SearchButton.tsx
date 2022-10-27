export default function SearchButton({
  isLoading,
  searchButtonHandler,
}: {
  isLoading: any;
  searchButtonHandler: any;
}) {
  if (isLoading) {
    return <button className="btn loading"></button>;
  } else {
    return (
      <button onClick={searchButtonHandler} className="btn">
        Search
      </button>
    );
  }
}
