import React, { useContext, useEffect, useState } from 'react'
import styles from './styles.module.css'
import { Outlet, useParams } from 'react-router-dom'
import DataContext from '../../../context/DataContext';
import SingleCard from '../../../components/SingleCard';
import WidgetCard from '../../../components/WidgetCard';
import api from '../../../helpers/api';
export default function ArtistDetails() {
    const [topTracks, setTopTracks] = useState([])
    const [albums, setAlbums] = useState([])
    const { artistInfo } = useContext(DataContext)

    const { artistId } = useParams()
    console.log(artistId);
    console.log("artist info", artistInfo);

    useEffect(() => {
        const fetchData = async () => {
            if (artistId) {
                try {
                    //top songs
                    const response = await api.apiRec({ method: "GET", url: `artists/${artistId}/top-tracks` })
                    const topTracksRes = response?.tracks
                    console.log("TOP TRACKS", topTracksRes);
                    setTopTracks(topTracksRes)
                } catch (error) {
                    console.error(error)
                }
                try {
                    //artistalbums
                    const response = await api.apiRec({ method: "GET", url: `artists/${artistId}/albums` })
                    const artistAlbums = response?.items
                    console.log("ALBUMS", artistAlbums);
                    setAlbums(artistAlbums)
                } catch (error) {
                    console.error(error)
                }
            }
        }
        fetchData()
    }, [])

    const cardsList = [{ title: "Top Songs", WidgetState: topTracks }, { title: "Artist Albums", WidgetState: albums }]

    return (
        <div className='screenContainer'>
            <div className={styles.artistInfoContainer}>
                <SingleCard image={artistInfo?.images[0]?.url} title={artistInfo.name} style={"artist"} subtitle={`${artistInfo.followers.total} followers`} />
            </div>
            {cardsList.map((card, index) => {
                return <WidgetCard key={index} title={card.title} widgetState={card.WidgetState} />
            })}
            <Outlet />
        </div>

    )
}
