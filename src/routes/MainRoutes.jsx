import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home/Home.jsx'
import Layout from '../layouts/Layout/Layout.jsx'
import Registration from "../pages/Registration/Registration.jsx";
import Successfully from "../pages/Successfully/Successfully.jsx";
import PersonalAccount from '../pages/PersonalAccount/PersonalAccount.jsx';
import ProfileLayout from '../layouts/ProfileLayout/ProfileLayout.jsx';
import Mybookings from '../pages/PersonalAccount/Mybookings.jsx';
import Favorites from '../pages/PersonalAccount/Favorites.jsx';
import Catalog from '../pages/Catalog/Catalog.jsx';

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='catalog' element={<Catalog/>} />
          <Route path='personalaccount/' element={<ProfileLayout/>}>
            <Route index element={<PersonalAccount/>}/>
            <Route path='mybookings' element={<Mybookings/>} />
            <Route path='favorites' element={<Favorites/>} />
          </Route>
        </Route>
        <Route path={'/registration'} element={<Registration/>}/>
        <Route path={'/registration-success'} element={<Successfully/>}/>
        <Route path='/*' element={null} />
    </Routes>
  )
}

export default MainRoutes