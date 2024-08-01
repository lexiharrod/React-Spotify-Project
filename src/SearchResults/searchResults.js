import React, { useState } from "react";

function SearchResults() {

    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (query) => {
        const results = [
            {
                name: "Getaway Car",
                artist: "Taylor Swift",
                album: "Reputation",
                id: 1
            },
            {
                name: "August",
                artist: "Taylor Swift",
                album: "Folklore",
                id: 2 
            }
          ]
        setSearchResults(results);
    }

    return (
        <div>
            <h2 id='results'>Results</h2>
        </div>
    );
}

export default SearchResults;