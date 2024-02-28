import React, { useEffect, useState } from 'react'
import axios from 'axios'




function getTokenFromStorage() {
    const accessToken = localStorage.getItem('token')

    return accessToken
}

async function refreshTokenFromApi() {
    const refreshToken = localStorage.getItem('refreshToken')
    console.log(refreshToken);
    const url = "http://localhost:8888"
    try {
        const response = await axios.get(`${url}/refresh_token`, {
            params: {
                refresh_token: refreshToken
            }
        })
        const newAccessToken = response.data.access_token;
        // const newRefreshToken = response.data.refresh_token;
        localStorage.setItem('token', newAccessToken)
        console.log({ "access token": newAccessToken });
        return newAccessToken
        // console.log('New Access Token:', newAccessToken);
        // console.log('New Refresh Token:', newRefreshToken);
    } catch (refreshError) {
        console.error('Failed to refresh token', refreshError);
    }
}

async function apiRec({ method, url, body }) {
    try {
        let accessToken = getTokenFromStorage()
        if (!accessToken || accessToken === 'undefined') return
        // console.log(accessToken);
        const { data } = await axios({
            method,
            baseURL: 'https://api.spotify.com/v1/',
            url,
            headers: { 'Authorization': 'Bearer ' + accessToken },
            data: body,
        })
        return data
    } catch (error) {
        if (error.response && error.response.status === 401) {
            try {
                const newAccessToken = await refreshTokenFromApi()


            } catch (error) {

            }
        }
        console.log(error);
    }
}
export default { apiRec, refreshTokenFromApi }
