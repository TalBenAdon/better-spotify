import React from 'react'
import styles from './styles.module.css'
import AlbumImage from '../AlbumImage'
import AlbumInfo from '../AlbumInfo'
export default function SongCard({ album }) {

    return (
        <div className={styles.songCardBody}>
            <AlbumImage imageUrl={album?.images[0]?.url} />
            <AlbumInfo album={album} />
        </div>
    )
}
