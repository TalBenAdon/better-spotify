import React, { useContext } from 'react'
import styles from './styles.module.css'
import { useParams } from 'react-router-dom'
import DataContext from '../../../context/DataContext';
import SingleCard from '../../../components/SingleCard';
export default function ArtistDetails() {
    console.log("hi");
    const { artistInfo } = useContext(DataContext)

    const { artistId } = useParams()
    console.log(artistId);
    return (
        <div className='screenContainer'>
            <SingleCard image={artistInfo.images[0].url} title={artistInfo.name} />
        </div>
    )
}
