import React from 'react';
import styles from "../Successfully/Successfully.module.css";
import Img from "../../assets/registration/regis.svg";

const ErrorRegistration = () => {
    return (
        <div className={styles.registration} style={{background: `url(${Img}) no-repeat center/cover`}}>
            <div className={styles.registrationWrapper}>
                <h1>Ошибка регистрации</h1>
                <button className={styles.regis}>Повторить попытку</button>
            </div>
        </div>
    );
};

export default ErrorRegistration;