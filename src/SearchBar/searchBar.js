function SearchBar({searchTerm, setSearchTerm, search}) {

    function clearSearchBar() {
        setSearchTerm('');
    };

    function handleSearchClick() {
        search(searchTerm)
        clearSearchBar();
    }

    return (
        <div>
            <form>
                <input type='text' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                <button onClick={handleSearchClick}>Search</button>
            </form>
        </div>
    );
}

export default SearchBar;