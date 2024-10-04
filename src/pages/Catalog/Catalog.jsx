import React from 'react'
import styles from './Catalog.module.css'
import HeroSectionCatalog from '../../modules/HeroSection/HeroSectionCatalog'
import CatalogTours from '../../modules/CatalogTours/CatalogTours.jsx';

const Catalog = () => {
  return (
    <div className={styles.catalog}>
        <HeroSectionCatalog/>
        <CatalogTours/>
    </div>
  )
}

export default Catalog