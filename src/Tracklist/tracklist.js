import React from "react";
import Track from '../Track/track';

function Tracklist({ trackArray }) {
    return (
        <div>
            {trackArray.map((track) => (
                <Track key={track.id} track={track} />
            )
            )}
            <button>Save to Spotify</button>
        </div>
    );
}

export default Tracklist;