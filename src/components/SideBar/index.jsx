import React from 'react'
import styles from './styles.module.css'
import iconImg from '../../assets/3142_Assassin_T3_YoumuusGhostbladePNG.png'
export default function SideBar() {
    return (
        <div className={styles.sideBarContainer}>
            <img src={iconImg} alt="user Icon"
                className={styles.profileImage} />

            <div>
                <SideBarButton />
            </div>
        </div>
    )
}
