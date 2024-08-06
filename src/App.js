import React, { useState } from "react";
import './App.css';
import Tracklist from './Tracklist/tracklist';
import SearchBar from './SearchBar/searchBar';
import SearchResults from './SearchResults/searchResults';
import Playlist from './Playlist/playlist';

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

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
        <SearchResults />
        <Tracklist trackArray={trackArray} setPlaylistTracks={setPlaylistTracks} playlistTracks={playlistTracks}/>
        <Playlist playlistInfo={playlistInfo} playlistName={playlistName} playlistTracks={playlistTracks} setPlaylistName={setPlaylistName} setPlaylistTracks={setPlaylistTracks}  />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
