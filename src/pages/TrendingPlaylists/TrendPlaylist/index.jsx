import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../../helpers/api'
import styles from './styles.module.css'
import SingleCard from '../../../components/SingleCard'
import noImg from '../../../assets/Noimg.svg'
import Songs from '../../../components/Songs'
export default function TrendPlaylist() {
    const [playlist, setPlaylist] = useState({})
    const [songsList, setSongsList] = useState([])
    const { playlistId } = useParams()
    console.log(playlistId);

    useEffect(() => {
        const fetchData = async () => {
            const response = await api.apiRec({ method: "GET", url: `playlists/${playlistId}` })
            setPlaylist(response)
            console.log(response);

        }
        fetchData()
    }, [playlistId])

    useEffect(() => {
        const formatPlaylistsSongs = (playlistData) => {
            return playlistData?.tracks?.items?.map(item => item.track) ?? []
        }
        const formattedSongs = formatPlaylistsSongs(playlist)
        setSongsList(formattedSongs)
    }, [songsList])

    return (
        <div>

            <div className={styles.playlistInfoContainer}>
                <SingleCard
                    image={(playlist.images && playlist.images.length > 0) ? playlist.images[0].url : `${noImg}`}
                    title={playlist?.name ?? 'Name N/A'}
                    style={"albums"}
                    //TODO add handleonclick so it will chain all the playlist in the player
                    subtitle={playlist?.description ?? 'N/A'} />
            </div>
            <Songs songsList={songsList} />

        </div>

    )
}
