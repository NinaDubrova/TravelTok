import React from 'react'
import styles from './Header.module.css'
import Button from '../Button/Button';
import chat from '../../assets/HeaderAssets/chat.svg'
import user from '../../assets/HeaderAssets/user.svg'
import userw from '../../assets/HeaderAssets/user-w.svg'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1><a href="/">TRAVELTOK</a></h1>
      <nav className={styles.header__navbtns}>
        <a href="#">
          <Button
            width='90px'
            bgColor=''
            textColor=''
            text='Чат'
            icon={chat}
          ></Button>
        </a>

        <a href="#">
          <Button
            width='160px'
            bgColor=''
            textColor=''
            text='Для авторов'
            icon={user}
          ></Button>
        </a>

        <a href="#">
          <Button
            width='110px'
            bgColor='#FFFFFF'
            textColor='#000000'
            text='Войти'
            icon={userw}
          ></Button>
        </a>
      </nav>
    </header>
  )
}

export default Header;
