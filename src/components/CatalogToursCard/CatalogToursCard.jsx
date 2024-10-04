import React from 'react'
import styles from './CatalogToursCard.module.css'

const CatalogToursCard = (props) => {

    const {
        img,
        star,
        desc,
        price,
        avatar,
        info,
        starTitle
    } = props

    return (
        <div className={styles.card}>
            <div>
                <div className={styles.desc}>
                    <p>{desc}</p>
                    <img src={avatar} alt=""/>
                </div>
                <img src={img} alt="" className={styles.img}/>
                <div className={styles.info}>
                    <div className={styles.infoWrapper}>
                        <h2>{price}</h2>
                        <div className={styles.star}>
                            <img src={star} alt=""/>
                            <h3>{starTitle}</h3>
                        </div>
                    </div>
                    <p className={styles.text}>{info}</p>
                </div>
            </div>
        </div>
    )
}

export default CatalogToursCard