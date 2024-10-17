'use client'
import { droid_sans_bold } from '@/app/fonts';
import styles from './midsection.module.css';
import Image from 'next/image';
import { useLanguage } from '@/app/context/provider';

export default function MidSection () {
    const { content } = useLanguage();
    const { midsection } = content;

    return (
        <div className={styles.section}>
            <div className={styles.headingContainer}>
                <div className={`${styles.title} ${droid_sans_bold.className}`}>
                    {midsection.title}
                </div>
                <div className={`${styles.heading} ${droid_sans_bold.className}`}>
                    {midsection.heading}
                </div>
                <div className={styles.subHeading}>
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