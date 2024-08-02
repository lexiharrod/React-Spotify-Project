import React, { useState, useEffect } from "react";
import Tracklist from '../Tracklist/tracklist';

function Playlist({ playlistInfo, playlistName, playlistTracks, setPlaylistTracks, setPlaylistName }) {

    useEffect(() => {
        setPlaylistName(playlistInfo.playlistLabel);;
      }, []); // Run effect only once on mount

       //useEffect(() => {
        //setPlaylistTracks(playlistInfo.playlistSongs);;
      //}, []); // Run effect only once on mount


    return (
        <div>
            <h2 id='playlist'>Playlist</h2>
            <h3>{playlistName}</h3>
            <Tracklist trackArray={playlistTracks}/>

        </div>
    );
}

export default Playlist;