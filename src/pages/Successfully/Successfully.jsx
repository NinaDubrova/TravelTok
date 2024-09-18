import React from 'react';
import styles from "../Successfully/Successfully.module.css";
import Img from "../../assets/registration/regis.svg";
import Icon from "../../assets/registration/icon.svg";

const Successfully = () => {
    return (
        <div className={styles.registration} style={{background: `url(${Img}) no-repeat center/cover`}}>
            <div className={styles.registrationWrapper}>
                <h1>Поздравляем!</h1>
                <h1>Регистрация прошла успешна</h1>
                <button className={styles.regis}>Продолжить</button>
            </div>
        </div>
    );
};

export default Successfully;