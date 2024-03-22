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
            <div className={styles.artistDetailsScreen}>

                <div className={styles.artistDetailsCard}>

                    <SingleCard image={artistInfo.images[0].url} title={artistInfo.name} subtitle={`${artistInfo.followers?.total} followers`} />
                </div>
            </div>
        </div>
    )
}
