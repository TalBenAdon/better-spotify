import React from 'react'
import styles from './styles.module.css'
import { AiFillPlayCircle } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import SingleCard from '../SingleCard';
export default function Playlist({ name, image, totalSongs, id }) {
    const nav = useNavigate()
    const playPlaylist = (id) => {

        nav('/player', { state: { id: id } })


    }
    return (
        <SingleCard handleOnclick={() => playPlaylist(id)} title={name} image={image} subtitle={`${totalSongs} Song(s)`} icon={<AiFillPlayCircle />} />
    )
}
