import React from 'react'
import styles from './styles.module.css'
import { IoPlaySkipBack, IoPlaySkipForward, IoPlay } from "react-icons/io5";
import { FaPause } from "react-icons/fa"
export default function Controls({ isPlaying, setIsPlaying, handleNext, handlePrev }) {
    return (
        <div className={styles.controlWrapper}>
            <div className={styles.actionBtn} onClick={handlePrev}>
                <div className={styles.btnIcon}>

                    <IoPlaySkipBack />
                </div>
            </div>
            <div className={isPlaying ? `${styles.playPauseBtn} ${styles.active}` : styles.playPauseBtn} onClick={() => setIsPlaying(!isPlaying)}>
                <div className={styles.btnIcon}>

                    {isPlaying ? <FaPause /> : <IoPlay />}
                </div>
            </div>
            <div className={styles.actionBtn} onClick={handleNext}>
                <div className={styles.btnIcon}>

                    <IoPlaySkipForward />
                </div>
            </div>
        </div>
    )
}
