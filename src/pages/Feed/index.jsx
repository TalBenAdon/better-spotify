import React, { useEffect } from 'react'
import styles from './styles.module.css'
import { useLocation } from 'react-router-dom';
import api from '../../helpers/api';
export default function Feed() {
    const location = useLocation()
    console.log(location.state);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.apiRec({ method: "GET", url: location.state.url })
                console.log(response);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData()
    }, [])
    return (
        <div className="screenContainer"></div>
    )
}
