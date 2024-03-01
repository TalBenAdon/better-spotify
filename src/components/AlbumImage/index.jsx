import React from 'react'
import styles from './styles.module.css'
export default function AlbumImage({ imageUrl }) {
    return (

        <div className={styles.albumImageContainer}>
            <img src={imageUrl} alt="album art" />
            <div className={styles.albumImageShadow}>
                <img src={imageUrl} alt="shadow" className={styles.albumImageShadow} />
            </div>
        </div>

    )
}
