'use client'
import { droid_sans_bold } from '@/app/fonts';
import styles from './midsection.module.css';
import Image from 'next/image';
import { useLanguage, ENGLISH, SPANISH, PORTUGUESE } from '@/app/context/provider';

export default function MidSection () {
    const { content, language } = useLanguage();
    const { midsection } = content;

    return (
        <div className={styles.section}>
            <div className={`${styles.headingContainer} ${language !== ENGLISH ? styles.translation : ''}`}>
                <div className={`${styles.title} ${droid_sans_bold.className}`}>
                    {midsection.title}
                </div>
                <div className={`${styles.heading} ${droid_sans_bold.className} ${language !== ENGLISH ? styles.translation : ''}`}>
                    {language === SPANISH 
                        ? <span className={styles.translation}>
                            <span className={styles.letterSpaceES_1}>Herramientas</span>
                            {' '}
                            <span className={styles.letterSpaceES_2}>para la</span>                            
                            {' '}
                            <span className={styles.letterSpaceES_3}>toma</span>
                            {' '}
                            <span className={styles.letterSpaceES_4}>de decisiones</span>
                        </span>
                        : language === PORTUGUESE 
                            ? <span className={`${styles.translation} ${styles.fontSizePT_1}`}>
                                <span className={`${styles.letterSpacePT_1} `}>Ferramentas</span>
                                {' '}
                                <span className={styles.letterSpacePT_4}>para</span>
                                {' '}
                                <span className={styles.letterSpacePT_2}>tomada</span>
                                {' '}
                                <span className={styles.letterSpacePT_3}>de decisão</span>
                                </span>
                            : <span>Tools to support decision-making</span>
                    }
                </div>
                <div className={`${styles.subHeading} ${language !== ENGLISH ? styles.marginLeft : styles.english }`}>
                    {midsection.subHeading}
                </div>
            </div>
            <div className={styles.displayContainer}>
                <div className={styles.display}>
                    <div className={styles.phoneDisplay}>
                        <div className={styles.circlePhone}></div>
                        <Image
                        src={'/assets/celular.png'}
                        alt='smart phone'
                        width={561}
                        height={1000}
                        className={styles.phoneImg}
                        quality={100}
                        priority
                        />
                    </div>
                    <div className={styles.tabletDisplay}>
                        <div className={styles.circlePhone}></div>
                        <Image
                        src={'/assets/tablet.png'}
                        alt='smart phone'
                        width={950}
                        height={586}
                        className={styles.tabletImg}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}