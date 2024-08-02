import React, { useState } from "react";
import './App.css';
import Tracklist from './Tracklist/tracklist';
import SearchBar from './SearchBar/searchBar';
import SearchResults from './SearchResults/searchResults';
import Playlist from './Playlist/playlist';

const trackArray = [
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

const playlistInfo = {
  playlistLabel: 'Summer Vibes',
  playlistSongs: [
    {
      name: "Bejeweled",
      artist: "Taylor Swift",
      album: "Midnights",
      id: 1
  },
  {
      name: "Clean",
      artist: "Taylor Swift",
      album: "1898",
      id: 2 
  }
  ]};

function App() {

  const [playlistName, setPlaylistName] = useState('');
  const [playlistTracks, setPlaylistTracks] = useState([]); 

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
        <SearchResults />
        <Tracklist trackArray={trackArray} setPlaylistTracks={setPlaylistTracks} playlistTracks={playlistTracks}/>
        <Playlist playlistInfo={playlistInfo} playlistName={playlistName} playlistTracks={playlistTracks} setPlaylistName={setPlaylistName} setPlaylistTracks={setPlaylistTracks} trackArray={trackArray} />

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
