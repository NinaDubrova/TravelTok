import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'

const MainRoutes = () => {
  return (
    <div>
        <Header/>
        <Routes>
            <Route path='/' element={null}/>
        </Routes>
        <Footer/>
    </div>
    
  )
}

export default MainRoutes