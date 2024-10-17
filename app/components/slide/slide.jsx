'use client'
import styles from './slide.module.css';
import { useLanguage } from '@/app/context/provider';
import { droid_sans_bold } from '@/app/fonts';
import { useCallback, useState } from 'react';
import { motion, AnimatePresence, useAnimate } from "framer-motion";
import { variants, swipeConfidenceThreshold, swipePower } from './animation';

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
            <div className={`${styles.arrowContainer} ${styles.left}`}>
                <button className={styles.arrow} onClick={() => paginate(-1)}>
                    <ArrowLeft/>
                </button>
            </div>
            <div className={`${styles.arrowContainer} ${styles.right}`}>
                <button className={`${styles.arrow}`} onClick={() => paginate(1)}>
                    <ArrowRight/>
                </button>
            </div>
            <div className={styles.cardContainer}>
                <AnimatePresence initial={false} custom={direction} mode='wait'>
                    <motion.div
                    key={position}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        opacity: { duration: 0.1 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);
                        if(swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        } else if(swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }}
                    >
                        <Card {...cards[position]}/>
                    </motion.div>
                </AnimatePresence>
            </div>
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

const ArrowLeft = () => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 27 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-7.64949e-07 15.5L26.25 0.344554L26.25 30.6554L-7.64949e-07 15.5Z" fill="black"/>
        </svg>
    )
}
const ArrowRight = () => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 27 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27 15.5L0.749999 30.6554L0.75 0.344555L27 15.5Z" fill="black"/>
        </svg>
    )
}