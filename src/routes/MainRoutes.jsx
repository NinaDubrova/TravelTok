import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home/Home.jsx'
import Layout from '../layouts/Layout/Layout.jsx'
import Registration from "../pages/Registration/Registration.jsx";
import Successfully from "../pages/Successfully/Successfully.jsx";
import PersonalAccount from '../pages/PersonalAccount/PersonalAccount.jsx';
import ProfileLayout from '../layouts/ProfileLayout/ProfileLayout.jsx';

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='personalaccount' element={<ProfileLayout/>}>
            <Route index element={<PersonalAccount/>}/>
          </Route>
        </Route>
        <Route path={'/registration'} element={<Registration/>}/>
        <Route path={'/registration-success'} element={<Successfully/>}/>
    </Routes>
  )
}

export default MainRoutes