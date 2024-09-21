import React from 'react'
import styles from './PersonalAccount.module.css'
import icon from '../../assets/PersonalAccountAssets/Ellipse 2288.svg'

const PersonalAccount = () => {
  return (
        <div className={styles.card}>
            <div className={styles.info}>
                <h2>Персональная информация</h2>
                <div className={styles.gender}>
                    <img src={icon} alt="" />
                    <button>Изменить</button>
                    <div>
                        <h3>Пол:</h3>
                        <div>
                            <label>
                                <input type="radio" name="gender" checked disabled/>
                                Женский
                            </label>
                            <label>
                                <input type="radio" name="gender" disabled/>
                                Мужской
                            </label>
                        </div>
                    </div>
                </div>
                <div className={styles.inputs}>
                    <label>Имя<input type="text" /></label>
                    <label>Фамилия<input type="text" /></label>
                    <label>Дата рождения<input type="date" /></label>
                </div>
            </div>
            <hr />
            <div className={styles.settings}>
                <h2>Настройка аккаунта</h2>
                <div className={styles.inputs}>
                    <label>Старый Пароль<input type="password" name="" /></label>
                    <label>Новый Пароль<input type="password" name="" /></label>
                    <label>Повторите Пароль<input type="password" name="" /></label>
                    <button>Применить</button>
                </div>
                <button className={styles.delete}>Удалить аккаунт</button>
            </div>
        </div>
  )
}

export default PersonalAccount