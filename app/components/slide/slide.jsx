'use client'
import styles from './slide.module.css';
import { useLanguage } from '@/app/context/provider';
import { droid_sans_bold } from '@/app/fonts';
import { useCallback, useState } from 'react';

export default function Slide () {
    const { content } = useLanguage();
    const { quotes } = content;
    const { cards } = quotes;
    const [[position, direction], setPaginate] = useState([0,0]); //direction must be set to -1 or 1

    const paginate = useCallback((newDirection) => {
        if(!cards) return
        if(newDirection > 0) {
            if(position === cards.length - 1) {
                setPaginate([0, newDirection]);
                return
            }
        }
        if(newDirection < 0) {
            if(position === 0) {
                setPaginate([cards.length - 1, newDirection]);
                return
            }
        }
        setPaginate([position + newDirection, newDirection]);
    },[cards, position, setPaginate]);

    return (
        <div className={styles.slide}>
            <div className={`${styles.arrow} ${styles.left}`}>
                <button onClick={() => paginate(-1)}>
                    <Arrow/>
                </button>
            </div>
            <div className={`${styles.arrow} ${styles.right}`}>
                <button onClick={() => paginate(1)}>
                    <Arrow/>
                </button>
            </div>
            {cards.map((card, i) => (
                position === i && <Card key={i} {...card}/>
            ))}                        
        </div>
    )
}

const Card = ({ quote, author, position }) => {
    return (
        <div className={styles.card}>
            <div className={styles.quote}>
                {quote}
            </div>
            <div className={`${styles.author} ${droid_sans_bold.className}`}>
                {author},
                <br/>
                {position}
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