import React from 'react';
import styles from "../Registration/Registration.module.css";
import Img from "../../assets/LogIn/image 1.svg"
import Arrow from "../../assets/registration/arrow.svg";
import Icon from "../../assets/registration/icon.svg";
import Line from "../../assets/registration/Line 3.svg";

const LogIn = () => {
    return (
        <div className={styles.registration}
             style={{background: `url(${Img}) no-repeat center/cover`, backgroundSize: "100%"}}>
            <div className={styles.registrationWrapper}>
                <div className={styles.arrowWrapper}>
                    <button className={styles.arrow}><img src={Arrow} alt=""/></button>
                    <h1>Вход в аккаунт</h1>
                </div>
                <div className={styles.input}>
                    <div className={styles.inputBox}>
                        <input type="email" placeholder={'E-mail'}/>
                    </div>
                    <div className={styles.inputBox}>
                        <input type="password" placeholder={'Пароль'}/>
                    </div>
                </div>
                <div className={styles.regisEnd}>
                    <a href="/registration-success">
                        <button className={styles.regis}>Продолжить через email</button>
                    </a>
                    <div className={styles.line}>
                        <img src={Line} alt=""/>
                        <h2>Или</h2>
                        <img src={Line} alt=""/>
                    </div>
                    <div className={styles.google}>
                        <button type={"submit"}>Войти через <img src={Icon} alt=""/></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;