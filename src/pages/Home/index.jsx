import React, { useEffect } from 'react'
import { BrowserRouter, Router, Routes, Route, useNavigate } from 'react-router-dom'
import styles from './styles.module.css'
import Library from '../Library'
import Feed from '../Feed'
import Trending from '../Trending'
import Player from '../Player'
import Favorites from '../Favorites'
import SideBar from '../../components/SideBar'
import { useState } from 'react'
import Login from '../Login'

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
            <Routes>
                <Route path='/login' element={<Login />} />

                <Route index element={<Library />} />
                <Route path='/feed' element={<Feed />} />
                <Route path='/trending' element={<Trending />} />
                <Route path='/player' element={<Player />} />
                <Route path='/favorites' element={<Favorites />} />
            </Routes>
        </div>
    )
}
