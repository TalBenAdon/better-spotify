import React from 'react'
import styles from './styles.module.css'
export default function Queue({ tracks, setCurrentIndex }) {
    console.log(tracks);
    return (
        <div className={styles.queueContainer}>
            <div className={styles.queue}>
                <p className={styles.upNext}>Up Next</p>
                <div className={styles.queueList}>
                    {tracks?.map((track, index) => {
                        return (
                            <div key={track.track.id} className={styles.queueItem} onClick={() => setCurrentIndex(index)}>
                                <p className={styles.trackName}>{track?.track?.name}</p>
                                <p>0:30</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
