import React from 'react'
import styles from './styles.module.css'
import { useOutletContext } from 'react-router-dom'
import SingleCard from '../../components/SingleCard'
import timeFormat from '../../helpers/timeFormat'
import { AiFillPlayCircle } from "react-icons/ai";
import Songs from '../../components/Songs'

export default function TopSongs() {
    const { topTracks } = useOutletContext()
    return (
        <Songs songsList={topTracks} />
    )
}
