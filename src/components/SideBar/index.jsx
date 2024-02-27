import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import defaultImg from '../../assets/3142_Assassin_T3_YoumuusGhostbladePNG.png'
import SideBarButton from '../SideBarButton'
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay, FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import api from '../../helpers/api';


const sideBarBtnData = [
    { title: "Feed", to: "/feed", icon: <MdSpaceDashboard /> },
    { title: "Trending", to: "/trending", icon: <FaGripfire /> },
    { title: "Player", to: "/player", icon: <FaPlay /> },
    { title: "Favorites", to: "/favorites", icon: <MdFavorite /> },
    { title: "Library", to: "/", icon: <IoLibrary /> }
]

export default function SideBar() {
    const [img, setImg] = useState(defaultImg)
    useEffect(() => {
        const userImage = api.apiRec({ method: 'GET', url: 'me' }).then(res => setImg(res.images[0].url))

        if (!userImage) {
            setImg(defaultImg)
        }
    }, [])

    return (
        <div className={styles.sideBarContainer}>
            <img src={img} alt="user Icon"
                className={styles.profileImage} />

            <div >
                {sideBarBtnData.map((button, index) => {
                    return <SideBarButton key={index} title={button.title} to={button.to} icon={button.icon} />
                })}
            </div>
            <SideBarButton title="Sign Out" to="" icon={<FaSignOutAlt />} />
        </div>
    )
}
