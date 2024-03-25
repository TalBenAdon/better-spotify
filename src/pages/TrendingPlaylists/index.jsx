import React from 'react'
import styles from './styles.module.css'
import { useLocation, useNavigate } from 'react-router-dom';
import SingleCard from '../../components/SingleCard';
import { FiChevronRight } from 'react-icons/fi'
export default function TrendingPlaylists() {
    const nav = useNavigate()
    const location = useLocation()
    const madeForYouLists = location.state
    const handleOnclick = (playlistId) => {
        nav(`${playlistId}`)
    }
    return (
        <div className='generalGridcardsContainer'>
            {madeForYouLists?.map(playlist => {
                return (
                    <SingleCard
                        key={playlist.id}
                        image={playlist.images[0].url}
                        handleOnclick={() => handleOnclick(playlist.id)}
                        title={playlist.name}
                        subtitle={playlist.description}
                        style={"albums"}
                        icon={<FiChevronRight style={{ fontSize: '24px', color: '#C4D0E3' }} />}
                    />
                )
            })}
        </div>
    )
}
