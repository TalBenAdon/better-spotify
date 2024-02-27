import React from 'react'
import styles from './styles.module.css'
import SongCard from '../../components/SongCard'
import Queue from '../../components/Queue'
export default function Player() {
    return (
        <div className="screenContainer">
            <div className={styles.contentContainer}>

                <div className={styles.leftBodyPlayer}>Left Content</div>
                <div className={styles.rightBodyPlayer}>
                    <SongCard />
                    <Queue />
                </div>
            </div>
        </div>
    )
}
