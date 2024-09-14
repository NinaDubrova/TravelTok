import React from 'react'
import styles from './Home.module.css'
import Regions from '../../modules/regions/regions'
import HeroSection from '../../modules/HeroSection/HeroSection'

const Home = () => {
  return (
    <main className={styles.home}>
      <HeroSection/>
      <Regions/>
    </main>
  )
}

export default Home;