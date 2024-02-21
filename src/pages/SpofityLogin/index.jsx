import React from 'react'
import styles from './styles.module.css'
import spotifyImg from '../../assets/spotify-xxl.png'
const AUTH_URL = 'https://accounts.spotify.com/authorize?client_id=164140a295ac4c2aa4b47ec705cd51a9&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'

export default function Login() {
    return (
        <div className={styles.loginPage}>
            <img src={spotifyImg} alt="spotify icon" className={styles.logo} />
            <a href={AUTH_URL} className={styles.loginBtn}>Log In with Spotify</a>
        </div>
    )
}
