import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import styles from './styles.module.css'
import Library from '../Library'
import Feed from '../Feed'
import Trending from '../Trending'
import Player from '../Player'
import Favorites from '../Favorites'
import SideBar from '../../components/SideBar'
import Login from '../Login'
import RelatedArtists from '../Feed/RelatedArtists'
import ArtistDetails from '../Feed/ArtistDetails'
import DefaultFeed from '../Feed/DefaultFeed'
import ManageContext from '../../context/ManageContext'
import TopSongs from '../TopSongs'

export default function Home() {
    const nav = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token || token === 'undefined') {
            nav('/login')
        }
    }, [])

    return (
        <div className={styles.mainBody}>

            {window.location.pathname !== '/login' && <SideBar />}
            <ManageContext>
                <Routes>


                    <Route path='/login' element={<Login />} />
                    <Route index element={<Library />} />
                    <Route path='/feed' element={<Feed />} >
                        <Route index element={<DefaultFeed />} />
                        <Route path='related-artists' element={<RelatedArtists />} />
                        <Route path='related-artists/:artistId' element={<ArtistDetails />} >
                            <Route path='top-songs' element={<TopSongs />} />
                        </Route>
                    </Route>

                    <Route path='/trending' element={<Trending />} />
                    <Route path='/player' element={<Player />} />
                    <Route path='/favorites' element={<Favorites />} />

                </Routes>
            </ManageContext>
        </div >
    )
}
