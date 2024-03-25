import React, { useContext, useEffect, useState } from 'react'
import styles from './styles.module.css'
import { Outlet, useLocation, useParams } from 'react-router-dom'
import DataContext from '../../../context/DataContext';
import SingleCard from '../../../components/SingleCard';
import WidgetCard from '../../../components/WidgetCard';
import api from '../../../helpers/api';
import noImg from '../../../assets/Noimg.svg'
export default function ArtistDetails() {
    const [topTracks, setTopTracks] = useState([])
    const [albums, setAlbums] = useState([])
    const [loading, setLoading] = useState(true)

    const { artistInfo, setArtistInfo } = useContext(DataContext)
    const location = useLocation()
    console.log(location.pathname);


    const { artistId } = useParams()
    const shouldHideWidgets = location.pathname !== `/feed/related-artists/${artistId}`
    console.log(shouldHideWidgets);
    console.log(artistId);
    // const outletInfoContext = { artistId, topTracks, albums }

    useEffect(() => {
        if (!artistInfo || !artistInfo.id) {
            const fetchData = async () => {
                try {
                    const response = await api.apiRec({ method: "GET", url: `artists/${artistId}` })
                    setArtistInfo(response)
                } catch (error) {
                    console.error(error)
                }
            }
            fetchData()
        }


    }, [artistId, artistInfo])


    useEffect(() => {
        const fetchData = async () => {
            if (!artistInfo || artistInfo.id !== artistId) {
                setLoading(true);
            }
            if (artistId) {
                try {
                    //top songs
                    const response = await api.apiRec({ method: "GET", url: `artists/${artistId}/top-tracks` })
                    const topTracksRes = response?.tracks ?? []
                    console.log("TOP TRACKS", topTracksRes);
                    setTopTracks(topTracksRes)
                    setLoading(false)
                } catch (error) {
                    console.error(error)
                }
                try {
                    //artistalbums
                    const response = await api.apiRec({ method: "GET", url: `artists/${artistId}/albums` })
                    const artistAlbums = response?.items ?? []
                    console.log("ALBUMS", artistAlbums);
                    setAlbums(artistAlbums)
                } catch (error) {
                    console.error(error)
                }
            }
        }
        fetchData()
    }, [artistId])

    const cardsList = [{ title: "Top Songs", WidgetState: topTracks }, { title: "Artist Albums", WidgetState: albums }]
    if (loading) {
        return <div>loading...</div>
    }
    return (
        <div className='screenContainer'>
            <div className={styles.artistInfoContainer}>
                <SingleCard
                    image={artistInfo?.images[0]?.url ?? `${noImg}`}
                    title={artistInfo?.name ?? 'Name N/A'}
                    style={"artist"}
                    subtitle={`${artistInfo?.followers?.total ?? 'N/A'} followers`} />
            </div>
            {!shouldHideWidgets && (
                <div className={styles.widgetsContainer}>
                    {cardsList.map((card, index) => {
                        return <WidgetCard key={index}
                            title={card.title}
                            widgetState={card.WidgetState} />
                    })}
                </div>
            )}
            <Outlet context={{ artistId, topTracks, albums }} />
        </div>

    )
}
