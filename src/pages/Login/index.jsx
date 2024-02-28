import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import spotifyImg from '../../assets/spotify-xxl.png'
import api from '../../helpers/api.js'
import axios from 'axios'
import { redirect, useNavigate } from 'react-router-dom'

// const AUTH_URL = 'https://accounts.spotify.com/authorize?client_id=164140a295ac4c2aa4b47ec705cd51a9&response_type=code&redirect_uri=http://localhost:5173&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'
const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            let parts = item.split("=")
            initial[parts[0]] = decodeURIComponent(parts[1])
            return initial
        }, {})
}
export default function Login({ loggedIn, setLoggedIn }) {
    const nav = useNavigate()
    const [spotifyToken, setSpotifyToken] = useState("")


    useEffect(() => {

        console.log('this is what we derived from the URL: ', getTokenFromUrl());
        const spotifyToken = getTokenFromUrl().access_token
        const refreshToken = getTokenFromUrl().refresh_token
        window.location.hash = ""
        console.log("spotify Token:", spotifyToken);
        console.log("refresh Token:", refreshToken);

        if (spotifyToken && spotifyToken !== 'undefined') {
            setSpotifyToken(spotifyToken)
            localStorage.token = spotifyToken
            localStorage.refreshToken = refreshToken
            // redirect('/')
            nav('/')
        }


    }, [])

    useEffect(() => {

        const token = localStorage.getItem('token')
        if (token && token !== 'undefined') {
            setSpotifyToken(token)
            // redirect('/')
            nav('/')
        }
    }, [])
    return (
        <div className={styles.loginPage}>
            <img src={spotifyImg} alt="spotify icon" className={styles.logo} />
            {!loggedIn && <a href='http://localhost:8888' className={styles.loginBtn} >Log In with Spotify</a>}
        </div>
    )
}
