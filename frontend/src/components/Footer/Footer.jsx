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
            <a href="/"><h1>Traveltok</h1></a>
            <nav>
                <ul>
                    <li><a href="">О нас</a></li>
                    <li><a href="">Лицензии</a></li>
                    <li><a href="/admin">Для авторов</a></li>
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
                    <a href=""><img src={insta} alt="" /></a>
                    <a href=""><img src={threads} alt="" /></a>
                    <a href=""><img src={x} alt="" /></a>
                    <a href=""><img src={facebook} alt="" /></a>
                    <a href=""><img src={telegram} alt="" /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer