import React from "react";
import styles from './track.module.css';


function Track({ track }) {

    return (
            <div id='songInfo' className={styles.songInfo}>
                    <div className={styles.track}>
                        <div>
                            <h3>Title: {track.name}</h3>
                            <p className={styles.p} >{track.artist} | {track.album}</p>
                        </div>
                        <button>Plus</button>
                    </div>
            </div>
    );
};

export default Track;