import React from 'react'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import styles from './styles.module.css'
import Library from '../Library'
import Feed from '../Feed'
import Trending from '../Trending'
import Player from '../Player'
import Favorites from '../Favorites'
import SideBar from '../../components/SideBar'
export default function Home() {
    return (
        <div className={styles.mainBody}>
            <SideBar />
            <Routes>
                <Route index element={<Library />} />
                <Route path='/feed' element={<Feed />} />
                <Route path='/trending' element={<Trending />} />
                <Route path='/player' element={<Player />} />
                <Route path='/favorites' element={<Favorites />} />
            </Routes>
        </div>
    )
}
