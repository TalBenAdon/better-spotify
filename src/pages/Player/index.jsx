import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import SongCard from '../../components/SongCard'
import Queue from '../../components/Queue'
import { useLocation } from 'react-router-dom'
import api from '../../helpers/api'
export default function Player() {
    const location = useLocation()
    const [tracks, setTracks] = useState([])
    const [currentTrack, setCurrentTrack] = useState({})
    const [currentIndex, setCurrentIndex] = useState(0)
    useEffect(() => {
        const fetchData = async () => {
            console.log(location.state);
            if (location.state) {
                try {
                    const response = await api.apiRec({ method: "GET", url: `/playlists/${location.state.id}/tracks` })
                    setTracks(response.items)
                    setCurrentTrack(response.items[0].track)
                    console.log(currentTrack);
                } catch (error) {
                    console.error({ "Error fetching data:": error });
                }
            }
        }
        fetchData()
    }, [location.state])

    useEffect(() => {
        if (tracks.length > 0) setCurrentTrack(tracks[currentIndex].track)
    }, [currentIndex, tracks])

    return (
        <div className="screenContainer">
            <div className={styles.contentContainer}>

                <div className={styles.leftBodyPlayer}>Left Content</div>
                <div className={styles.rightBodyPlayer}>
                    <SongCard album={currentTrack.album} />
                    <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
                </div>
            </div>
        </div>
    )
}
