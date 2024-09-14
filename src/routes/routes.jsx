import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home/Home.jsx'
import Layout from '../components/Layout/Layout.jsx'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
        </Route>
    </Routes>
  )
}

export default MainRoutes