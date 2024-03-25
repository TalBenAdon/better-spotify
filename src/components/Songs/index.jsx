import React from 'react'
import styles from './styles.module.css'
import { AiFillPlayCircle } from "react-icons/ai";
import SingleCard from '../SingleCard';
import timeFormat from '../../helpers/timeFormat';

//Receives a list of songs, creates a styled songslist
export default function Songs({ songsList, img }) {
    return (
        <div className={styles.songsContainer}>
            {songsList.map((track, index) => {
                return (<SingleCard
                    key={index}
                    image={img ? img : track?.album?.images[2]?.url}
                    title={track?.name}
                    subtitle={timeFormat.formatDuration(track?.duration_ms)}
                    icon={<AiFillPlayCircle />}
                />)
            })}

        </div>
    )
}
