import React from 'react'
import styles from './styles.module.css'
export default function WaveAnimation({ isPlaying }) {

    const waveClass = isPlaying ? `${styles.box} ${styles.active}` : `${styles.box}`


    return (
        <div className={styles.boxContainer}>
            <div className={`${waveClass} ${styles.box1}`}></div>
            <div className={`${waveClass} ${styles.box2}`}></div>
            <div className={`${waveClass} ${styles.box3}`}></div>
            <div className={`${waveClass} ${styles.box4}`}></div>
            <div className={`${waveClass} ${styles.box5}`}></div>
            <div className={`${waveClass} ${styles.box6}`}></div>
            <div className={`${waveClass} ${styles.box7}`}></div>
            <div className={`${waveClass} ${styles.box2}`}></div>
            <div className={`${waveClass} ${styles.box3}`}></div>
            <div className={`${waveClass} ${styles.box4}`}></div>
            <div className={`${waveClass} ${styles.box5}`}></div>
            <div className={`${waveClass} ${styles.box6}`}></div>
            <div className={`${waveClass} ${styles.box7}`}></div>
        </div>
    )
}
