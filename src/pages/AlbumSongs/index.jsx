import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import api from '../../helpers/api'
import Songs from '../../components/Songs'

export default function AlbumSongs() {
    const { albumId } = useParams()
    const location = useLocation()
    const albumImgUrl = location.state
    const [songs, setSongs] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.apiRec({ method: "GET", url: `albums/${albumId}/tracks` })
                setSongs(response.items)
            } catch (error) {
                console.error(error);
            }
        }
        fetchData()
    }, [albumId])
    console.log(songs);
    return (
        <Songs songsList={songs} img={albumImgUrl} />
    )
}
