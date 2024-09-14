import React from 'react'
import styles from './footer.module.css'
import mail from '../../assets/icons/mail-01.svg'
import call from '../../assets/icons/call.svg'
import insta from '../../assets/icons/instagram.svg'
import threads from '../../assets/icons/threads.svg'
import x from '../../assets/icons/x.svg'
import facebook from '../../assets/icons/facebook-02.svg'
import telegram from '../../assets/icons/telegram.svg'



const Footer = () => {
    return (
        <footer>
            <h1>Traveltok</h1>
            <nav>
                <ul>
                    <li><a href="">О нас</a></li>
                    <li><a href="">Лицензии</a></li>
                    <li><a href="">Для авторов</a></li>
                </ul>
                <ul>
                    <li><a href="">Маршруты</a></li>
                    <li><a href="">Q&A</a></li>
                </ul>
            </nav>
            <div className={styles.contact}>
                <ul>
                    <li><img src={mail} alt="" /><a href="">traveltok@gmail.com</a></li>
                    <li><img src={call} alt="" /><a href="">+996 (999) 999-999</a></li>
                </ul>
                <div>
                    <img src={insta} alt="" />
                    <img src={threads} alt="" />
                    <img src={x} alt="" />
                    <img src={facebook} alt="" />
                    <img src={telegram} alt="" />
                </div>
            </div>
        </footer>
    )
}

export default Footer