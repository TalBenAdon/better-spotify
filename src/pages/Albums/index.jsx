import React, { useState } from 'react'
import styles from './styles.module.css'
import { Outlet, useLocation, useNavigate, useOutletContext } from 'react-router-dom'
import SingleCard from '../../components/SingleCard'
import { FiChevronRight } from 'react-icons/fi'

export default function Albums() {
    const { albums, artistId } = useOutletContext()
    const location = useLocation()
    const nav = useNavigate()
    const handleOnclick = (albumId, albumImg) => {
        nav(`${albumId}`, { state: albumImg })
    }

    const shouldHideAlbums = location.pathname !== `/feed/related-artists/${artistId}/albums`

    return (



        <div className='generalGridcardsContainer'>
            {!shouldHideAlbums ?
                albums.map((album, index) => {
                    return (
                        <SingleCard
                            key={index}
                            image={album?.images[0]?.url}
                            title={album?.name}
                            handleOnclick={() => handleOnclick(album.id, album.images[2].url)}
                            subtitle={album.album_type}
                            style={'albums'}
                            icon={<FiChevronRight style={{ fontSize: '24px', color: '#C4D0E3' }} />}
                        />
                    )
                })
                : <Outlet />}
        </div>

    )
}

