import React from 'react'
import styles from './styles.module.css'
export default function AlbumInfo({ album }) {
    console.log(album);

    const artistsList = []
    album?.artists?.forEach(artist => {
        artistsList.push(artist.name)
    });

    return (
        <div className={styles.albumInfoCard}>
            <div className={styles.albumNameContainer}>
                <div className={styles.marquee}>
                    <p>{`${album?.name} - ${artistsList?.join(", ")}`}</p>
                </div>
            </div>
            <div className={styles.albumInfo}>
                <p>{`${album?.name} 
                is ${album?.album_type === 'single' ?
                        `a ${album?.album_type}` : `an ${album?.album_type}`} 
                         by 
                        ${artistsList?.join(', ')} including ${album?.total_tracks} track(s)`}</p>
            </div>
            <div className={styles.albumReleaseDate}>
                <p>{`Release Date: ${album?.release_date}`}</p>
            </div>
        </div>
    )
}
