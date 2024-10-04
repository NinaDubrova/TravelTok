import React from 'react'
import styles from './HeroSection.module.css'
import searchIcon from '../../assets/HomeAssets/search.svg'
import dateIcon from '../../assets/HomeAssets/date.svg'
import regionIcon from '../../assets/HomeAssets/region.svg'
import priceIcon from '../../assets/HomeAssets/price.svg'
import FilterButton from '../../components/FilterButton/FilterButton'

const HeroSectionCatalog = () => {

  const {
    hero_section,
    hero_section__catalog,
    hero_section__title__catalog,
    hero_section__search,
    hero_section__search__bar,
    hero_section__search__bar__icon,
    hero_section__search__bar__input,
    hero_section__search__filterbtns
  } = styles;

  return (
    <section className={`${hero_section} ${hero_section__catalog}`}>
        <h1 className={hero_section__title__catalog}>Откройте тайны областей Кыргызстана</h1>
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

export default HeroSectionCatalog