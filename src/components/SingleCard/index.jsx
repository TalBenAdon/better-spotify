import React from 'react'
import styles from './styles.module.css'
//my generic component for when I need to get a list of single cards with an onclick function I choose
export default function SingleCard({ handleOnclick, image, title, subtitle, icon, style }) {
    return (

        <div className={style === "artist" ? styles.singleArtistCard : styles.singleCardBody} onClick={handleOnclick} >
            <img src={image} alt="playlist Image" className={styles.cardImage} />
            <p className={styles.cardTitle}>{title}</p>
            <p className={styles.cardSubtitle}>{subtitle}</p>

            {style === "artist" ? null :
                <div className={styles.cardFade}>
                    {icon}
                </div>
            }

        </div>
    )
}
