import React, { useContext, useEffect, useState } from 'react'
import DataContext from '../../../context/DataContext'
import styles from './styles.module.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi'
import api from '../../../helpers/api';
import SingleCard from '../../../components/SingleCard';

export default function RelatedArtists() {
    const { setArtistInfo } = useContext(DataContext)
    const nav = useNavigate()
    const [similarArtists, setSimilarArtists] = useState([])
    const location = useLocation()
    console.log(location.state);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.apiRec({ method: "GET", url: location.state.url })
                setSimilarArtists(response.artists)
            } catch (error) {
                console.error(error);
            }
        }
        fetchData()
    }, [])

    const artistsList = [...similarArtists]

    const handleOnclick = (artistId, artist) => {
        setArtistInfo(artist)
        nav(`${artistId}`)
    }

    return (
        <div className='screenContainer'>

            <div className='generalGridcardsContainer'>
                {artistsList.map((artist, index) => {
                    return <SingleCard key={index}
                        handleOnclick={() => handleOnclick(artist.id, artist)}
                        image={artist?.images[0]?.url}
                        title={artist?.name}
                        subtitle={`${artist?.followers?.total} followers`}
                        icon={<FiChevronRight style={{ fontSize: '24px', color: '#C4D0E3' }} />}
                    />
                })}

            </div>

        </div>
    )
}

