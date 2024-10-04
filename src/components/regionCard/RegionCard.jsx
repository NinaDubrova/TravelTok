import React from 'react'
import styles from './regionCard.module.css'

const RegionCard = (props) => {

    const {
        title,
        img
    } = props

  return (
    <div className={styles.card}>
        <img src={img} alt="" />
        <h2>{title}</h2>
    </div>
  )
}

export default RegionCard