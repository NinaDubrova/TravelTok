import React from 'react';
import styles from '../Registration/Registration.module.css';
import Img from '../../assets/registration/regis.svg'
import Icon from '../../assets/registration/icon.svg'
import Arrow from '../../assets/registration/arrow.svg'
import Line from "../../assets/registration/Line 3.svg";

const Registration = () => {
    return (
        <div className={styles.registration} style={{ background: `url(${Img}) no-repeat center/cover`,backgroundSize:"100%" }}>
            <div className={styles.registrationWrapper}>
                <div className={styles.arrowWrapper}>
                    <button className={styles.arrow}><img src={Arrow} alt=""/></button>
                    <h1>Регистрация</h1>
                </div>
                <div className={styles.google}>
                    <button type={"submit"}><img src={Icon} alt=""/> Продолжить с Google</button>
                </div>
                <div className={styles.line}>
                    <img src={Line} alt=""/>
                    <h2>Или</h2>
                    <img src={Line} alt=""/>
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