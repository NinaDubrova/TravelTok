import React from 'react'
import arrow from '../../assets/HomeAssets/arrowdown.svg'
import styles from '../FilterButton/FilterButton.module.css'

const FilterButton = ({ icon, text, onClick, isDropdown, }) => {
    return (
        <button
            className={styles.filterbtn}
            onClick={onClick}
        >
            {icon && <img src={icon} alt='' className={styles.filterbtn__icon} />}
            {text}
            {isDropdown && <div className={styles.filterbtn__arrow}><img src={arrow} alt="" /></div>}
        </button>
    )
}

export default FilterButton