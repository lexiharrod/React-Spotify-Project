import React, { useState, useEffect } from "react";
import Tracklist from '../Tracklist/tracklist';
import Track from '../Track/track';

function Playlist({ playlistInfo, playlistName, playlistTracks, setPlaylistTracks, setPlaylistName, trackArray }) {

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
            {playlistTracks.map((track) => (
                <Track key={track.id} track={track} showButton={false}/>
            )
            )}

        </div>
    );
}

export default Playlist;