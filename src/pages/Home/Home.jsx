import React from 'react'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.home}>
      <section className={styles.hero_section}>
        <h1 className={styles.hero_section__title}>ЛУЧШИЙ ПУТЕВОДИТЕЛЬ В КЫРГЫЗСТАНЕ</h1>
        <p className={styles.hero_section__text}>Мы предлагаем уникальные туристические маршруты,<br></br> адаптированные под ваши предпочтения. </p>
        <div className={styles.hero_section__search}>
          <input type="text" />
        </div>
      </section>
    </div>
  )
}

export default Home;