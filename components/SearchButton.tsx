export default function SearchButton({
                                         isLoading,
                                         searchButtonHandler,
                                     }: {
    isLoading: boolean;
    searchButtonHandler: any;
}): JSX.Element {
    if (isLoading) {
        return <button className="btn loading btn-outline w-24"></button>;
    } else {
        return (
            <button onClick={searchButtonHandler} className="btn btn-outline w-24">
                Search
            </button>
        );
    }
}
