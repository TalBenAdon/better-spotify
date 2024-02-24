import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function useAuth(code) {

    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExpiresIn] = useState()
    // console.log(code);

    // useEffect(() => {
    //     axios.post('http://localhost:8888/token', {
    //         code: code
    //     })
    //         .then(res => {
    //             console.log(res.data);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //             // window.location = '/'
    //         })

    // }, [code])

}

