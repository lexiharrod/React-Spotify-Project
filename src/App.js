import './App.css';
import Track from './Track/track';
import Tracklist from './Tracklist/tracklist';
import SearchBar from './SearchBar/searchBar';
import SearchResults from './SearchResults/searchResults';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
        <SearchResults />
        <Track />
        <Tracklist />
        <Track />

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
