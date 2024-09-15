import React from 'react'
import styles from './Home.module.css'
import Regions from '../../modules/regions/regions'
import { showError, showSuccess } from '../../utils/alerts/alerts'
import HeroSection from '../../modules/HeroSection/HeroSection'

const Home = () => {
  return (
    <main className={styles.home}>
      <HeroSection/>
      <Regions/>
{/* Toastify */}
      <center>
        <button onClick={() => showSuccess('Toastify-Success')}>Toastify-Success</button>
        -----
        <button onClick={() => showError('Toastify-Error')}>Toastify-Error</button>
      </center>
{/* Toastify */}
    </main>
  )
}

export default Home;