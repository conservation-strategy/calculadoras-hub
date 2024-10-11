import { droid_sans_bold } from '@/app/fonts';
import styles from './midsection.module.css';
import Image from 'next/image';

export default function MidSection () {

    return (
        <div className={styles.section}>
            <div className={`${styles.title} ${droid_sans_bold.className}`}>
                open access
            </div>
            <div className={styles.headingContainer}>
                <div className={`${styles.heading} ${droid_sans_bold.className}`}>
                    Tools to support decision-making
                </div>
                <div className={styles.subHeading}>
                    Empowering stakeholders with data-driven valuation insights
                </div>
            </div>
            <div className={styles.displayContainer}>
                <div className={styles.display}>
                    <div className={styles.phoneDisplay}>
                        <div className={styles.circlePhone}></div>
                        <Image
                        src={'/assets/celular_novo.png'}
                        alt='smart phone'
                        width={248}
                        height={422}
                        className={styles.phoneImg}
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