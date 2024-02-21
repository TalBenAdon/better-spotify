import React from 'react'
import Login from './pages/SpofityLogin'
import Home from './pages/Home'
import { BrowserRouter } from 'react-router-dom'
const code = new URLSearchParams(window.location.search).get('code')
export default function App() {
  return (
    <>
      <Home />
      {/* <Login /> */}
    </>
  )
}
