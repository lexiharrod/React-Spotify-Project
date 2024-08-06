import React from "react";
import styles from './track.module.css';
import Playlist from '../Playlist/playlist';


function Track({ track, addTrack, showPlusButton, showMinusButton, removeTrack }) {

    function handleClick() {
        const newSong = {
            id: track.id,
            name: track.name,
            artist: track.artist,
            album: track.album,
            uri: track.uri
        }
        addTrack(newSong);
    };

    function handleRemove() {
        removeTrack(track.id);
    };

    let buttonIcon = null;
    if (showPlusButton) {
        buttonIcon = <button onClick={handleClick}>Plus</button>
    };
    if (showMinusButton) {
        buttonIcon = <button onClick={handleRemove}>Minus</button>
    }

    return (
            <div id='songInfo' className={styles.songInfo}>
                    <div className={styles.track}>
                        <div>
                            <h3>Title: {track.name}</h3>
                            <p className={styles.p} >{track.artist} | {track.album}</p>
                        </div>
                        {buttonIcon}
                    </div>
            </div>
    );
};

export default Track;