import React from 'react'
import styles from './HeroSection.module.css'
import searchIcon from '../../assets/HomeAssets/search.svg'
import dateIcon from '../../assets/HomeAssets/date.svg'
import regionIcon from '../../assets/HomeAssets/region.svg'
import priceIcon from '../../assets/HomeAssets/price.svg'
import FilterButton from '../../components/FilterButton/FilterButton'

const HeroSection = () => {

  const {
    hero_section,
    hero_section__title,
    hero_section__text,
    hero_section__search,
    hero_section__search__bar,
    hero_section__search__bar__icon,
    hero_section__search__bar__input,
    hero_section__search__filterbtns
  } = styles;

  return (
    <section className={hero_section}>
        <h1 className={hero_section__title}>ЛУЧШИЙ ПУТЕВОДИТЕЛЬ В КЫРГЫЗСТАНЕ</h1>
        <p className={hero_section__text}>Мы предлагаем уникальные туристические маршруты,<br></br> адаптированные под ваши предпочтения. </p>
        <div className={hero_section__search}>
          <div className={hero_section__search__bar}>
            <div className={hero_section__search__bar__icon}><img src={searchIcon} alt="" /></div>
            <input className={hero_section__search__bar__input} placeholder='поиск места и мероприятий' type="text" />
          </div>

          <div className={hero_section__search__filterbtns}>
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
  )
}

export default HeroSection