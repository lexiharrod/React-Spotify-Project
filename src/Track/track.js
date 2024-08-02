import React from "react";
import styles from './track.module.css';
import Playlist from '../Playlist/playlist';


function Track({ track, addTrack }) {

    function handleClick() {
        const newSong = {
            id: track.id,
            name: track.name,
            artist: track.artist,
            album: track.album
        }
        addTrack(newSong);
    };

    return (
            <div id='songInfo' className={styles.songInfo}>
                    <div className={styles.track}>
                        <div>
                            <h3>Title: {track.name}</h3>
                            <p className={styles.p} >{track.artist} | {track.album}</p>
                        </div>
                        <button onClick={handleClick}>Plus</button>
                    </div>
            </div>
    );
};

export default Track;