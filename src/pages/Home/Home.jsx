import React from 'react'
import styles from './Home.module.css'
import searchIcon from '../../assets/HomeAssets/search.svg'
import dateIcon from '../../assets/HomeAssets/date.svg'
import regionIcon from '../../assets/HomeAssets/region.svg'
import priceIcon from '../../assets/HomeAssets/price.svg'
import FilterButton from '../../components/FilterButton/FilterButton'
import Regions from '../../modules/regions/regions'
import { showError, showSuccess } from '../../utils/alerts/alerts'

const Home = () => {
  return (
    <div className={styles.home}>
      <section className={styles.hero_section}>
        <h1 className={styles.hero_section__title}>ЛУЧШИЙ ПУТЕВОДИТЕЛЬ В КЫРГЫЗСТАНЕ</h1>
        <p className={styles.hero_section__text}>Мы предлагаем уникальные туристические маршруты,<br></br> адаптированные под ваши предпочтения. </p>
        <div className={styles.hero_section__search}>
          <div className={styles.hero_section__search__bar}>
            <div className={styles.hero_section__search__bar__icon}><img src={searchIcon} alt="" /></div>
            <input className={styles.hero_section__search__bar__input} placeholder='поиск места и мероприятий' type="text" />
          </div>

          <div className={styles.hero_section__search__filterbtns}>
            <FilterButton
            icon={dateIcon}
            text='дата'
            isDropdown={true}
            ></FilterButton>
            <FilterButton
            icon={regionIcon}
            text='область'
            isDropdown={true}
            ></FilterButton>
            <FilterButton
            icon={priceIcon}
            text='цена'
            isDropdown={false}
            ></FilterButton>
          </div>
        </div>
      </section>
      <Regions/>
{/* Toastify */}
      <center>
        <button onClick={() => showSuccess('Toastify-Success')}>Toastify-Success</button>
        -----
        <button onClick={() => showError('Toastify-Error')}>Toastify-Error</button>
      </center>
{/* Toastify */}
    </div>
  )
}

export default Home;