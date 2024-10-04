import React from 'react'
import styles from './PersonalAccount.module.css'
import RecentToursCard from "../../components/RecentToursCard/RecentToursCard.jsx";
import { RECENT_DATA_MINI } from '../../constants/recentToursMini.js';

const Favorites = () => {
  return (
    <div className={`${styles.card} ${styles.card2}`}>
        <h2>Избранное</h2>
        <div className={styles.container}>
            {RECENT_DATA_MINI.map((item, idx)=>{
                return (
                    <RecentToursCard
                    key={idx} //fix
                    img={item.img}
                    star={item.star}
                    desc={item.desc}
                    price={item.price}
                    starTitle={item.starTitle}
                    miniCard={true}
                />
                )
            })}
            </div>
    </div>
  )
}

export default Favorites