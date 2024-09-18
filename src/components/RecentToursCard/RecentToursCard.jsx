import React from 'react'
import styles from './recentToursCard.module.css'
import Avatar from '../../assets/icons/Ellipse 2284.svg'

const RecentToursCard = (props) => {

    const {
        img,
        star,
        desc,
        price,
        dateStart,
        dateEnd,
        starTitle
    } = props

    return (
        <div className={styles.card}>
            <div>
                <div className={styles.desc}>
                    <p>{desc}</p>
                    <img src={Avatar} alt=""/>
                </div>
                <img src={img} alt=""/>
                <div className={styles.info}>
                    <div className={styles.infoWrapper}>
                        <h2>{price}</h2>
                        <div className={styles.star}>
                            <img src={star} alt=""/>
                            <h3>{starTitle}</h3>
                        </div>
                    </div>
                    <div className={styles.date}>
                        <h4>Дата начало:{dateStart}</h4>
                        <h4>Дата конца:{dateEnd}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentToursCard