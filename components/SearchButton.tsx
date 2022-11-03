export default function SearchButton({
                                         isLoading,
                                         searchButtonHandler,
                                     }: {
    isLoading: boolean;
    searchButtonHandler: any;
}): JSX.Element {
    if (isLoading) {
        return <button className="btn loading glass w-24 text-black"></button>;
    } else {
        return (
            <button onClick={searchButtonHandler} className="btn glass w-24 text-black">
                Search
            </button>
        );
    }
}
