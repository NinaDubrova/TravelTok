import React, { useEffect, useState } from 'react'
import styles from './Header.module.css'
import Button from '../Button/Button';
import chat from '../../assets/HeaderAssets/chat.svg'
import user from '../../assets/HeaderAssets/user.svg'
import author from '../../assets/HeaderAssets/authors.png'
import userw from '../../assets/HeaderAssets/user-w.svg'

const Header = () => {
  const [isPersonalAccount, setIsPersonalAccount] = useState(false)
  const {header, header__navbtns} = styles;

  useEffect(() => {
      const currentUrl = window.location.pathname;
      if (currentUrl.toString() === '/personalaccount'){
          setIsPersonalAccount(true)
      }
      else{
        setIsPersonalAccount(false)
      }
  }, [])

  return (
    <header className={header}>
      <h1><a href="/">TRAVELTOK</a></h1>
      <nav className={header__navbtns}>
        <a href="#">
          <Button
            width='90px'
            text='Чат'
            icon={chat}
          ></Button>
        </a>

        <a href="/admin">
          <Button
            width='160px'
            text='Для авторов'
            icon={author}
          ></Button>
        </a>

        <a href="/registration">
          <Button
            width='110px'
            bgColor='#FFFFFF'
            textColor='#000000'
            text={isPersonalAccount? 'Профиль' : 'Войти'}
            icon={userw}
          ></Button>
        </a>
      </nav>
    </header>
  )
}

export default Header;
