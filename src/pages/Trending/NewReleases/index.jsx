import React from 'react'
import styles from './styles.module.css'
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import SingleCard from '../../../components/SingleCard';
import { FiChevronRight } from 'react-icons/fi'
export default function NewReleases() {
    const nav = useNavigate()
    const location = useLocation()
    const newReleaseAlbums = location.state
    console.log(newReleaseAlbums);
    const handleOnclick = (newReleaseId) => {
        nav(`${newReleaseId}`)
    }
    return (
        <div className='generalGridcardsContainer'>
            {console.log(newReleaseAlbums)}
            {newReleaseAlbums?.map(album => {
                return (
                    <SingleCard
                        key={album.id}
                        image={album.images[2].url}
                        handleOnclick={() => handleOnclick(album.id)}
                        title={album.name}
                        subtitle={<span className={styles.subStyle}>
                            <span>released: {album.release_date}</span>
                            <span>{album.type}</span>
                        </span>}
                        style={"albums"}
                        icon={<FiChevronRight style={{ fontSize: '24px', color: '#C4D0E3' }} />}
                    />
                )
            })}
            <Outlet />
        </div>
    )
}