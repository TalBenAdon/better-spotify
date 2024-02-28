import React from 'react'
import styles from './styles.module.css'
import { AiFillPlayCircle } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
export default function Playlist({ name, image, totalSongs, id, toggleComponent }) {
    const nav = useNavigate()
    const playPlaylist = () => {
        toggleComponent()
        setTimeout(() => {

            nav('/player', { state: { id: id } })
        }, 500)

    }
    return (
        <div className={styles.playlistCard} onClick={playPlaylist} >
            <img src={image} alt="playlist Image" className={styles.playlistImage} />
            <p className={styles.PlaylistTitle}>{name}</p>
            <p className={styles.PlaylistSubtitle}>{`${totalSongs} Songs`}</p>
            <div className={styles.playlistFade}>

                <AiFillPlayCircle />

            </div>
        </div>
    )
}
