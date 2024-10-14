'use client'
import { droid_sans_bold } from '@/app/fonts';
import styles from './quotes.module.css';
import { useLanguage } from '@/app/context/provider';

export default function Quotes () {

    return (
        <div className={styles.section}>
            <MainQuote/>
            <Slide/>
        </div>
    )
}

const MainQuote = () => {
    const { content } = useLanguage();
    const { quotes } = content;
    const { main } = quotes;

    return (
        <div className={styles.mainContainer}>
            <div className={styles.line}></div>
            <div className={styles.frame}>
                <div className={`${styles.quote} ${styles.mainQuote}`}>
                    {main.quote}
                </div>
                <div className={`${styles.mainAuthor} ${droid_sans_bold.className}`}>
                    {main.author}
                </div>
            </div>
        </div>
    )
}

const Slide = () => {
    const { content } = useLanguage();
    const { quotes } = content;
    const { cards } = quotes;

    return (
        <div className={styles.slide}>
            <div className={`${styles.arrow} ${styles.left}`}>
                <button><Arrow/></button>
            </div>
            <div className={`${styles.arrow} ${styles.right}`}>
                <button><Arrow/></button>
            </div>
            <div className={styles.card}>
                <div className={styles.quote}>
                    {cards[0].quote}
                </div>
                <div className={`${styles.author} ${droid_sans_bold.className}`}>
                    {cards[0].author},
                    <br/>
                    {cards[0].position}
                </div>
            </div>
        </div>
    )
}

const Arrow = () => {
    return (
        <svg width="27" height="31" viewBox="0 0 27 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-7.64949e-07 15.5L26.25 0.344554L26.25 30.6554L-7.64949e-07 15.5Z" fill="black"/>
        </svg>
    )
}