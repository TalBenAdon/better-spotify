import React from 'react'
import styles from './styles.module.css'
import ProgressCircle from '../ProgressCircle'
import Controls from '../Controls';
import WaveAnimation from '../WaveAnimation';
export default function AudioPlayer({ currentTrack }) {
    const artistsList = [];
    currentTrack?.album?.artists.forEach(artist => {
        artistsList.push(artist.name)
    })
    console.log(currentTrack);
    return (
        <div className={styles.playerContainer}>
            <div className={styles.playerLeftBody}>
                <ProgressCircle
                    percentage={75}
                    isPlaying={true}
                    image={currentTrack?.album?.images[0]?.url}
                    size={300}
                    color="#C96850"
                />
            </div>
            <div className={styles.playerRightBody}>
                <p className={styles.songTitle}>{currentTrack?.name}</p>
                <p className={styles.songArtists}>{artistsList.join(" | ")}</p>
                <div className={styles.playerRightBottom}>
                    <div className={styles.songDuration}>

                        <p className={styles.duration}>0:01</p>
                        <WaveAnimation />
                        <p className={styles.duration}>0:30</p>
                    </div>
                    <Controls
                    // isPlaying={isPlaying}
                    // setIsPlaying={setIsPlaying}
                    // handleNext={handleNext}
                    // handlePrev={handlePrev}
                    // total={total}
                    />
                </div>
            </div>
        </div>
    )
}
