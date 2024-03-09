import React from 'react'
import styles from './styles.module.css'
//my generic component for when I need to get a list of single cards with an onclick function I choose
export default function SingleCard({ handleOnclick, image, title, subtitle, icon }) {
    return (

        <div className={styles.singleCardBody} onClick={handleOnclick} >
            <img src={image} alt="playlist Image" className={styles.cardImage} />
            <p className={styles.cardTitle}>{title}</p>
            <p className={styles.cardSubtitle}>{subtitle}</p>
            <div className={styles.cardFade}>
                {icon}
            </div>

        </div>
    )
}
