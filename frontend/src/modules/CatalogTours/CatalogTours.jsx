import React from 'react'
import styles from './CatalogTours.module.css'
import { CATALOG_DATA } from '../../constants/Catalogtours.js';
import CatalogToursCard from '../../components/CatalogToursCard/CatalogToursCard.jsx';

const CatalogTours = () => {
  return (
        <div className={styles.catalog}>
            {CATALOG_DATA.map((item, idx)=>{
                return (
                    <CatalogToursCard
                    key={idx} //fix
                    img={item.img}
                    star={item.star}
                    avatar={item.avatar}
                    desc={item.desc}
                    price={item.price}
                    starTitle={item.starTitle}
                    info={item.info}
                />
                )
            })}
            </div>
  )
}

export default CatalogTours