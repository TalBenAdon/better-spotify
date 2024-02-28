import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { useLocation, useNavigate } from 'react-router-dom'
import api from '../../helpers/api'
import Playlist from '../../components/Playlist'
import AnimatedComponent from '../../helpers/AnimatedComponent'
export default function Library() {
    const [showComponent, setShowComponent] = useState(false);
    const [playlists, setPlaylists] = useState([])
    const nav = useNavigate()
    const location = useLocation()
    const toggleComponent = () => {

        setTimeout(() => {
            setShowComponent(!showComponent)
        }, 50)
    }
    useEffect(() => {
        // api.refreshTokenFromApi()

        const response = api.apiRec({ method: 'GET', url: 'me/playlists' }).then(res => setPlaylists(res.items))
        setShowComponent(true);

        return () => {
            setShowComponent(false);
        }
    }, [])

    useEffect(() => {
        setTimeout(() => {

            setShowComponent(true)
        }, 500);
    }, [location.pathname])

    const navigateToPlayer = (playlistId) => {
        toggleComponent();
        setTimeout(() => {
            nav('/player', { state: { id: playlistId } });
        }, 500);
    };



    return (
        <div className="screenContainer">

            <AnimatedComponent inProp={showComponent} >
                <div className={styles.libraryContainer}>
                    {playlists.map((playlist, index) => {
                        return <Playlist id={playlist.id} key={index} navigateToPlayer={navigateToPlayer} toggleComponent={toggleComponent} name={playlist.name} image={playlist.images[0].url} totalSongs={playlist.tracks.total} />
                    })}
                </div>
            </AnimatedComponent>
        </div>
    )
}
