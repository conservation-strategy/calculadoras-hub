import { droid_sans_bold } from '@/app/fonts';
import styles from './quotes.module.css';

export default function Quotes () {

    return (
        <div className={styles.section}>
            <MainQuote/>
            <Slide/>
        </div>
    )
}

const MainQuote = () => {

    return (
        <div className={styles.mainContainer}>
            <div className={styles.line}></div>
            <div className={styles.frame}>
                <div className={`${styles.quote} ${styles.mainQuote}`}>
                    CSF&apos;s online tools empower decision-makers with user-friendly information on the costs and benefits of human interactions with the environment, turning months of work into instant insights for more effective planning and fundraising, and calculation of environmental fines.
                </div>
                <div className={`${styles.mainAuthor} ${droid_sans_bold.className}`}>
                    Pedro Gasparinetti, CSF Innovation Director
                </div>
            </div>
        </div>
    )
}

const Slide = () => {
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
                    The mining impacts calculator allows a simple, fast and effective damage identification, establishing precise criteria and individualizing each valuation criterion, making the Public Prosecutor's Office's reparation claims even more fair and technically sound.
                </div>
                <div className={styles.author}>
                    Gustavo Kenner,
                    <br/>
                    Federal Prosecutor (Brazil)
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