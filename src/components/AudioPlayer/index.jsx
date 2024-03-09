import React, { useEffect, useRef, useState } from 'react'
import styles from './styles.module.css'
import ProgressCircle from '../ProgressCircle'
import Controls from '../Controls';
import WaveAnimation from '../WaveAnimation';
export default function AudioPLayer({
    currentTrack,
    currentIndex,
    setCurrentIndex,
    total,
}) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [trackProgress, setTrackProgress] = useState(0);
    var audioSrc = total[currentIndex]?.track.preview_url;

    const audioRef = useRef(new Audio(total[0]?.track.preview_url));

    const intervalRef = useRef();

    const isReady = useRef(false);

    const { duration } = audioRef.current;

    const currentPercentage = duration ? (trackProgress / duration) * 100 : 0;

    const startTimer = () => {
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            if (audioRef.current.ended) {
                handleNext();
            } else {
                setTrackProgress(audioRef.current.currentTime);
            }
        }, [1000]);
    };

    useEffect(() => {
        if (audioRef.current.src) {
            if (isPlaying) {
                audioRef.current.play();
                startTimer();
            } else {
                clearInterval(intervalRef.current);
                audioRef.current.pause();
            }
        } else {
            if (isPlaying) {
                audioRef.current = new Audio(audioSrc);
                audioRef.current.play();
                startTimer();
            } else {
                clearInterval(intervalRef.current);
                audioRef.current.pause();
            }
        }
    }, [isPlaying]);

    useEffect(() => {
        audioRef.current.pause();
        audioRef.current = new Audio(audioSrc);

        setTrackProgress(audioRef.current.currentTime);

        if (isReady.current) {
            audioRef.current.play();
            setIsPlaying(true);
            startTimer();
        } else {
            isReady.current = true;
        }
    }, [currentIndex]);

    useEffect(() => {
        return () => {
            audioRef.current.pause();
            clearInterval(intervalRef.current);
        };
    }, []);

    const handleNext = () => {
        if (currentIndex < total.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else setCurrentIndex(0);
    };

    const handlePrev = () => {
        if (currentIndex - 1 < 0) setCurrentIndex(total.length - 1);
        else setCurrentIndex(currentIndex - 1);
    };

    const addZero = (n) => {
        return n > 9 ? "" + n : "0" + n;
    };
    const artistsList = [];
    currentTrack?.album?.artists.forEach((artist) => {
        artistsList.push(artist.name);
    });
    return (
        <div className={styles.playerContainer}>
            <div className={styles.playerLeftBody}>
                <ProgressCircle
                    percentage={currentPercentage}
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

                        <p className={styles.duration}>0:{addZero(Math.round(trackProgress))}</p>
                        <WaveAnimation isPlaying={isPlaying} />
                        <p className={styles.duration}>0:30</p>
                    </div>
                    <Controls
                        isPlaying={isPlaying}
                        setIsPlaying={setIsPlaying}
                        handleNext={handleNext}
                        handlePrev={handlePrev}
                        total={total}
                    />
                </div>
            </div>
        </div>
    )
}
