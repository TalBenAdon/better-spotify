import React from 'react'
import styles from './styles.module.css'
import { Outlet, useLocation } from 'react-router-dom';
import SingleCard from '../../components/SingleCard';
import { FiChevronRight } from 'react-icons/fi'

export default function Trending() {

    return (
        <div className="screenContainer">
            <Outlet />
        </div>
    )
}
