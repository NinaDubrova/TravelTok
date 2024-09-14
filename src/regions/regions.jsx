import React from 'react'
import RegionCard from '../../components/regionCard/RegionCard';
import { REGIONS_DATA } from '../../constants/regions';
import styles from './regions.module.css'

const Regions = () => {
  return (
    <div className={styles.regions}>
        <h1>Области</h1>
        <div className={styles.container}>
            {REGIONS_DATA.map((item, idx)=>{
                return (
                    <RegionCard
                    title={item.title}
                    img={item.icon}
                />
                )
            })}
            </div>
    </div>
  )
}

export default Regions