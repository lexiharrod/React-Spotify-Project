import React from "react";
import Track from '../Track/track';

function Tracklist({ trackArray, setPlaylistTracks, playlistTracks }) {

    function addTrack(addedTrack) {

        const songExists = playlistTracks.some((track) => track.id === addedTrack.id);
        if (!songExists) {
        setPlaylistTracks((addedTracks) =>
        [...addedTracks, addedTrack]);
        }
      };

    return (
        <div>
            {trackArray.map((track) => (
                <Track key={track.id} track={track} addTrack={addTrack}/>
            )
            )}
            <button>Save to Spotify</button>
        </div>
    );
}

export default Tracklist;