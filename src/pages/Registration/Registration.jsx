import React from 'react';
import styles from '../Registration/Registration.module.css';
import Img from '../../assets/registration/regis.svg'
import Icon from '../../assets/registration/icon.svg'

const Registration = () => {
    return (
        <div className={styles.registration} style={{ background: `url(${Img}) no-repeat center/cover` }}>
            <div className={styles.registrationWrapper}>
                <h1>Регистрация</h1>
                <div className={styles.google}>
                    <button type={"submit"}><img src={Icon} alt=""/> Продолжить с Google</button>
                </div>
                <div className={styles.line}>
                    <h2>Или</h2>
                </div>


                <div className={styles.input}>
                    <div className={styles.inputBoxName}>
                        <input className={styles.firstName} type="text" placeholder={'Фамилия'}/>
                        <input className={styles.secondName} type="text" placeholder={'Имя'}/>
                    </div>
                    <div className={styles.inputBox}>
                        <input type="date" placeholder={"Дата рождение"}/>
                    </div>
                    <div className={styles.inputBox}>
                        <input type="email" placeholder={'E-mail'}/>
                    </div>
                    <div className={styles.inputBox}>
                        <input type="password" placeholder={'Пароль'}/>
                    </div>
                    <div className={styles.inputBox}>
                        <input type="password" placeholder={'Повторите пароль'}/>
                    </div>
                </div>
                <div className={styles.regisEnd}>
                    <a href="/registration-success">
                        <button className={styles.regis}>Зарегистрироваться</button>
                    </a>

                    <h3>есть аккаунт?</h3>
                    <a href="#">Войти</a>
                </div>
            </div>
        </div>
    );
};

export default Registration;