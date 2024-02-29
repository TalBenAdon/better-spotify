import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { useLocation, useNavigate } from 'react-router-dom'
import api from '../../helpers/api'
import Playlist from '../../components/Playlist'
import { motion, AnimatePresence } from 'framer-motion'

export default function Library() {

    const [playlists, setPlaylists] = useState([])


    useEffect(() => {
        // api.refreshTokenFromApi()

        const response = api.apiRec({ method: 'GET', url: 'me/playlists' }).then(res => setPlaylists(res.items))




    }, [])







    return (




        <div className="screenContainer">

            <div className={styles.libraryContainer}>


                {playlists.map((playlist, index) => {
                    return (
                        <Playlist id={playlist.id} key={index} name={playlist.name} image={playlist.images[0].url} totalSongs={playlist.tracks.total} />
                    )
                })}
            </div>
        </div>


    )
}
