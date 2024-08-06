import React, { useState, useEffect } from "react";
import Track from '../Track/track';

function Playlist({ playlistInfo, playlistName, playlistTracks, setPlaylistTracks, setPlaylistName}) {

    function removeTrack(songIdToRemove) {
        setPlaylistTracks((tracks) => 
            tracks.filter((track) => track.id !== songIdToRemove)
            );
    }
    
    useEffect(() => {
        setPlaylistName(playlistInfo.playlistLabel);;
      }, []); // Run effect only once on mount

       //useEffect(() => {
        //setPlaylistTracks(playlistInfo.playlistSongs);;
      //}, []); // Run effect only once on mount

    function clearPlaylist() {
        setPlaylistTracks([]);
    };

    function savePlaylist() {
        const uriArray = playlistTracks.map((track) => track.uri);
        alert( uriArray);
      };

    function handleClick() {
        savePlaylist();
        clearPlaylist();
    }

    return (
        <div>
            <h2 id='playlist'>Playlist</h2>
            <input id='playlistName' value={playlistName} defaultValue='New Playlist' onChange={(e) => setPlaylistName(e.target.value)} />
            {playlistTracks.map((track) => (
                <Track key={track.id} track={track} showPlusButton={false} showMinusButton={true} removeTrack={removeTrack} />
            )
            )}
            <button onClick={handleClick}>Save to Spotify</button>
        </div>
    );
}

export default Playlist;