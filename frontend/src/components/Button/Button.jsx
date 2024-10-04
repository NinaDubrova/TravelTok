import React from 'react'
import styles from '../Button/Button.module.css'

const Button = ({width, bgColor, textColor, text, icon, link}) => {
    const btnStyle = {
        width: width || 'auto',
        backgroundColor: bgColor || '#181818',
        color: textColor || '#FFFFFF'
    }

  return (
    <button className={styles.button} style={btnStyle}>
        <span className='button__text'>{text}</span>
        <div className='button__icon'><img src={icon} alt="" /></div>
    </button>
  )
}



export default Button