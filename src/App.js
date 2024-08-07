import React, { useState, useCallback } from "react";
import './App.css';
import Tracklist from './Tracklist/tracklist';
import SearchBar from './SearchBar/searchBar';
import SearchResults from './SearchResults/searchResults';
import Playlist from './Playlist/playlist';
import spotify from './util/spotify';

const spotifyEndpoint = "spotify:track:";
const trackArray = [
  {
      name: "Getaway Car",
      artist: "Taylor Swift",
      album: "Reputation",
      id: 1,
      uri: spotifyEndpoint + '0VE4kBnHJUgtMf0dy6DRmW'
  },
  {
      name: "August",
      artist: "Taylor Swift",
      album: "Folklore",
      id: 2,
      uri: spotifyEndpoint + '3hUxzQpSfdDqwM3ZTFQY0K'
  },
  {
    name: "Bejeweled",
    artist: "Taylor Swift",
    album: "Midnights",
    id: 3,
    uri: spotifyEndpoint + '3qoftcUZaUOncvIYjFSPdE'
},
{
    name: "Clean",
    artist: "Taylor Swift",
    album: "1989",
    id: 4,
    uri: spotifyEndpoint + '2ByBBvpR9b7IynvRmnG7kG'
}
];

const playlistInfo = {
  playlistLabel: 'Summer Vibes',
};



function App() {

  const [playlistName, setPlaylistName] = useState('');
  const [playlistTracks, setPlaylistTracks] = useState([]); 
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const search = useCallback((term) =>
  { spotify.search(term).then(setSearchResults)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} search={search}/>
        <SearchResults results={searchResults}/>
        <Tracklist searchResults={searchResults} setPlaylistTracks={setPlaylistTracks} playlistTracks={playlistTracks} />
        <Playlist playlistInfo={playlistInfo} playlistName={playlistName} playlistTracks={playlistTracks} setPlaylistName={setPlaylistName} setPlaylistTracks={setPlaylistTracks}  />
      </header>
    </div>
  );
}

export default App;
