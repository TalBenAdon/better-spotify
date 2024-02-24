import React from 'react'
import styles from './styles.module.css'
import { NavLink } from 'react-router-dom'
export default function SideBarButton({ title, to, icon }) {

    return (
        <NavLink to={to}
            className={({ isActive }) =>
                isActive ? `${styles.active} ${styles.btnBody}` : styles.btnBody}>
            <div className={styles.btnIcon}>
                {icon}
            </div>
            <p className={styles.btnTitle}>{title}</p>
        </NavLink>
    )
}
