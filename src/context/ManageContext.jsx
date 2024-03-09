import DataContext from "./DataContext";

import React, { useState } from 'react'

export default function ({ children }) {
    const [artistInfo, setArtistInfo] = useState({})
    return (
        <DataContext.Provider value={{ setArtistInfo, artistInfo }}>
            {children}
        </DataContext.Provider>
    )
}
