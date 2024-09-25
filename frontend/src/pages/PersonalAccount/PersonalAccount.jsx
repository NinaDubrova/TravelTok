import React, { useState } from 'react'
import styles from './PersonalAccount.module.css'
import icon from '../../assets/PersonalAccountAssets/Ellipse 2288.svg'

const PersonalAccount = () => {
    const [isPressed, setIsPressed] = useState(false)

    const handleSubmit = () => {
        setIsPressed(isPressed? false : true)
    }

  return (
    <>
        <div className={isPressed? `${styles.blur} ${styles.card}` : styles.card}>
            <div className={styles.info}>
                <h2>Персональная информация</h2>
                <div className={styles.gender}>
                    <img src={icon} alt="" />
                    <button disabled={isPressed}>Изменить</button>
                    <div>
                        <h3>Пол:</h3>
                        <div>
                            <label>
                                <input type="radio" name="gender" checked disabled={isPressed}/>
                                Женский
                            </label>
                            <label>
                                <input type="radio" name="gender" disabled={isPressed}/>
                                Мужской
                            </label>
                        </div>
                    </div>
                </div>
                <div className={styles.inputs}>
                    <label>Имя<input type="text" disabled={isPressed} /></label>
                    <label>Фамилия<input type="text" disabled={isPressed} /></label>
                    <label>Дата рождения<input type="date" disabled={isPressed} /></label>
                </div>
            </div>
            <hr />
            <div className={styles.settings}>
                <h2>Настройка аккаунта</h2>
                <div className={styles.inputs}>
                    <label>Старый Пароль<input type="password" name="" disabled={isPressed} /></label>
                    <label>Новый Пароль<input type="password" name="" disabled={isPressed} /></label>
                    <label>Повторите Пароль<input type="password" name="" disabled={isPressed} /></label>
                    <button disabled={isPressed}>Применить</button>
                </div>
                <button className={styles.delete} onClick={handleSubmit} disabled={isPressed}>Удалить аккаунт</button>
            </div>
         
        </div>
        {isPressed && (
                <div className={styles.modal}>
                    <div className={styles.title}>
                        <h3>Вы действительно хотите удалить?</h3>
                        <p>Все ваши данные и настройки будут безвозвратно удалены. <br />Это действие невозможно отменить.</p>
                    </div>
                    <div className={styles.btns}>
                        <button onClick={handleSubmit}>Отменить</button>
                        <button>Удалить</button>
                    </div>
                </div>
        )}
    </>
  )
}

export default PersonalAccount