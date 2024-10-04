import React from 'react'
import styles from './recentTours.module.css'
import RecentToursCard from "../../components/RecentToursCard/RecentToursCard.jsx";
import {RECENT_DATA} from "../../constants/recentTours.js";

const RecentTours = () => {
  return (
    <div className={styles.recent}>
        <h1>Недавно добавленные туры</h1>
        <div className={styles.container}>
            {RECENT_DATA.map((item, idx)=>{
                return (
                    <RecentToursCard
                    key={idx} //fix
                    img={item.img}
                    star={item.star}
                    desc={item.desc}
                    price={item.price}
                    dateStart={item.dateStart}
                    dateEnd={item.dateEnd}
                    starTitle={item.starTitle}
                />
                )
            })}
            </div>
    </div>
  )
}

export default RecentTours