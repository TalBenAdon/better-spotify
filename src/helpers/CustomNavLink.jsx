import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useLocation, useHistory, NavLink } from 'react-router-dom'

const CustomNavLink = ({ to, children, onClick }) => {
    const [shouldAnimate, setShouldAnimate] = useState(false)
    const location = useLocation()
    const history = useHistory()

    useEffect(() => {
        setShouldAnimate(true)

        const timeOutId = setTimeout(() => {
            history.push(to)
        }, 500);

        return () => {
            clearTimeout(timeOutId)
        }
    }, [to, location.pathname])

    const handleClick = (e) => {
        onClick()
    }

    return (
        <NavLink to={to} onClick={handleClick}>
            {children}
        </NavLink>
    )

}

export default CustomNavLink