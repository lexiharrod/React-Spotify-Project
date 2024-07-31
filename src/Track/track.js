import React, { useState } from "react";
import styles from './track.module.css';


function Track() {
    return (
        <div id='track' className={styles.track} >
            <div id='songInfo' className={styles.songInfo}>
                <h3 id='songTitle'>Song Title</h3>
                <p className={styles.p} >artist | album</p>
            </div>
            <button>Plus</button>
        </div>
    );
}

export default Track;