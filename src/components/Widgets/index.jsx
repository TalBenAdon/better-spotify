import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import api from '../../helpers/api'
import WidgetCard from '../WidgetCard'
export default function Widgets({ artistId }) {
    const [similar, SetSimilar] = useState([])
    const [featured, SetFeatured] = useState([])
    const [newRelease, SetNewRelease] = useState([])
    const id = artistId?.artists[0]?.id

    useEffect(() => {
        const fetchData = async () => {
            if (id) {
                try {
                    const response = await api.apiRec({ method: "GET", url: `/artists/${id}/related-artists` })
                    console.log(response);
                    const artists = response?.artists
                    SetSimilar(artists)
                } catch (error) {
                    console.error({ "error getting artists": error });
                }
                try {
                    const response = await api.apiRec({ method: "GET", url: `/browse/featured-playlists` })
                    const playlists = response?.playlists?.items
                    SetFeatured(playlists)
                } catch (error) {
                    console.error({ "error getting featured": error });
                }
                try {
                    const response = await api.apiRec({ method: "GET", url: `/browse/new-releases` })
                    const releases = response?.albums?.items
                    SetNewRelease(releases)
                } catch (error) {
                    console.error({ "error getting featured": error });
                }
            }
        }
        fetchData()
    }, [id])

    const cardsList = [{ title: "Similar Artists", widgetState: similar, url: `/artists/${id}/related-artists` },
    { title: "Made For You", widgetState: featured, url: `/browse/featured-playlists` },
    { title: "New Releases", widgetState: newRelease, url: `/browse/new-releases` }]
    console.log(similar, featured, newRelease);
    return (

        <div className={styles.widgetsContainer}>
            {cardsList.map((card, index) => {
                return <WidgetCard key={index} url={card.url} title={card.title} widgetState={card.widgetState} />
            })}

        </div>
    )
}
