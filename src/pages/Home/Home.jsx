import React from 'react'
import styles from './Home.module.css'
import Regions from '../../modules/regions/regions'
<<<<<<< HEAD
import { showError, showSuccess } from '../../utils/alerts/alerts'
=======
import HeroSection from '../../modules/HeroSection/HeroSection'
>>>>>>> 76757f8bf3f0cc92b1329473f087f881d7134f7a

const Home = () => {
  return (
    <main className={styles.home}>
      <HeroSection/>
      <Regions/>
<<<<<<< HEAD
{/* Toastify */}
      <center>
        <button onClick={() => showSuccess('Toastify-Success')}>Toastify-Success</button>
        -----
        <button onClick={() => showError('Toastify-Error')}>Toastify-Error</button>
      </center>
{/* Toastify */}
    </div>
=======
    </main>
>>>>>>> 76757f8bf3f0cc92b1329473f087f881d7134f7a
  )
}

export default Home;