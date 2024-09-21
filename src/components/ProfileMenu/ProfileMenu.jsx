import React, { useEffect, useState } from 'react'
import styles from './ProfileMenu.module.css'
import geard from '../../assets/ProfileMenuAssets/notactive/geard.svg'
import heart from '../../assets/ProfileMenuAssets/notactive/heart.svg'
import leave from '../../assets/ProfileMenuAssets/notactive/leave.svg'
import location from '../../assets/ProfileMenuAssets/notactive/location.svg'
import geard1 from '../../assets/ProfileMenuAssets/active/geard (1).svg'
import heart1 from '../../assets/ProfileMenuAssets/active/heart (1).svg'
import location1 from '../../assets/ProfileMenuAssets/active/location (1).svg'

const ProfileMenu = () => {
    const [isPersonalAccount, setIsPersonalAccount] = useState(false)


    useEffect(() => {
        const currentUrl = window.location.pathname;
        if (currentUrl.toString() === '/personalaccount'){
            setIsPersonalAccount(true)
        }
    }, [])



  return (
    <div className={styles.card}>
        <ul>
            <li><img src={isPersonalAccount? geard1 : geard} alt="" /><a href="/personalaccount" className={isPersonalAccount? styles.active : ''}>Настройки учетной записи</a></li>
            <li><img src={location || location1} alt="" /><a href="">Мои бронирования</a></li>
            <li><img src={heart || heart1} alt="" /><a href="">Избранное</a></li>
            <li><img src={leave} alt="" /><a href="">Выйти</a></li>
        </ul>
    </div>
  )
}

export default ProfileMenu