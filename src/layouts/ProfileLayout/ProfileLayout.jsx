import React from 'react'
import ProfileMenu from '../../components/ProfileMenu/ProfileMenu'
import { Outlet } from 'react-router-dom'
import styles from './ProfileLayout.module.css'

const ProfileLayout = () => {
  return (
    <div className={styles.profile}>
        <ProfileMenu/>
        <Outlet/>
    </div>
  )
}

export default ProfileLayout