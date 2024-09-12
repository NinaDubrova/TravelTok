import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
        <h1>TravelTok</h1>
        <nav>
            <a href="/">Home</a>
            <br />
        </nav>
    </header>
  )
}

export default Header;
