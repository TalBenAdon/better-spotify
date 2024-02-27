import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { useNavigate } from 'react-router-dom'
import api from '../../helpers/api'
import Playlist from '../../components/Playlist'
import AnimatedComponent from '../../helpers/AnimatedComponent'
export default function Library() {
    const [showComponent, setShowComponent] = useState(false);
    const [playlists, setPlaylists] = useState([])

    const toggleComponent = () => {

        setTimeout(() => {
            setShowComponent(!showComponent)
            setExitAnimation(false)
        }, 50)
    }
    useEffect(() => {
        // api.refreshTokenFromApi()

        const response = api.apiRec({ method: 'GET', url: 'me/playlists' }).then(res => setPlaylists(res.items))
        setShowComponent(true);
    }, [])





    return (
        <div className="screenContainer">

            <AnimatedComponent inProp={showComponent} >
                <div className={styles.libraryContainer}>
                    {playlists.map((playlist, index) => {
                        return <Playlist id={playlist.id} key={index} toggleComponent={toggleComponent} name={playlist.name} image={playlist.images[0].url} totalSongs={playlist.tracks.total} />
                    })}
                </div>
            </AnimatedComponent>
        </div>
    )
}
