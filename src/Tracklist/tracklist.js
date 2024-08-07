import React from "react";
import Track from '../Track/track';

function Tracklist({ searchResults, setPlaylistTracks, playlistTracks }) {

    function addTrack(addedTrack) {

        const songExists = playlistTracks.some((track) => track.id === addedTrack.id);
        if (!songExists) {
        setPlaylistTracks((addedTracks) =>
        [...addedTracks, addedTrack]);
        }
      };

    return (
        <div>
            {searchResults.map((track) => (
                <Track key={track.id} track={track} addTrack={addTrack} showPlusButton={true} showMinusButton={false} />
            )
            )}
            <button>Save to Spotify</button>
        </div>
    );
}

export default Tracklist;