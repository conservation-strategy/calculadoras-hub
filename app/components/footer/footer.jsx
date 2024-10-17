'use client'
import Image from 'next/image';
import styles from './footer.module.css';
import { duru_sans } from '@/app/fonts';
import { useLanguage } from '@/app/context/provider';

export default function Footer () {
    const { content } = useLanguage();
    const { footer } = content;
    return (
        <div className={`${styles.footer} ${duru_sans.className}`}>
            <Socials/>            
            <div style={{ textWrap: 'balance '}}>
                {footer.about}{' '}
                <a style={{ textDecoration: 'underline' }}
                href='https://www.conservation-strategy.org/'
                target='_blank'
                rel='noopener noreferrer'
                >
                    {footer.link}
                </a>
            </div>
            <div className={styles.contact}>
                {footer.contact}{' '}
                <a href="mailto:csfbrasil@conservation-strategy.org" className={styles.link}>
                    csfbrasil@conservation-strategy.org
                </a>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.footnote}>
                {footer.footnote[0]}{' '}
                {footer.footnote[1]}
            </div>            
        </div>
    )
}

const Socials = () => {

    return (
        <div className={styles.socials}>
                <a 
                href='https://www.linkedin.com/company/conservationstrategyfund/ '
                target='_blank'
                rel='noopener noreferrer'
                >
                    <Image
                    src={'/IN-icon.svg'}
                    alt='IN icon'
                    width={0}
                    height={0}
                    className={styles.icon}
                    />
                </a>
                <a
                href='https://www.youtube.com/user/numbers4nature'
                target='_blank'
                rel='noopnener noreferrer'
                >
                    <Image
                    src={'/YT-icon.svg'}
                    alt='YT icon'
                    width={0}
                    height={0}
                    className={styles.icon}
                    />
                </a>
                <a
                href=' https://www.instagram.com/conservationstrategyfund/'
                target='_blank'
                rel='noopener noreferrer'
                >
                    <Image
                    src={'/IG-icon.svg'}
                    alt='IG icon'
                    width={0}
                    height={0}
                    className={styles.icon}
                    />
                </a>
                <a
                href='https://twitter.com/numbers4nature'
                target='_blank'
                rel='noopener noreferrer'
                >
                    <Image
                    src={'/X-icon.svg'}
                    alt='X icon'
                    width={0}
                    height={0}
                    className={styles.icon}
                    />
                </a>
                <a
                href='https://www.facebook.com/conservationstrategyfund'
                target='_blank'
                rel='noopener noreferrer'
                >
                    <Image
                    src={'/fb-icon.svg'}
                    alt='fb icon'
                    width={0}
                    height={0}
                    className={styles.icon}
                    />
                </a>
            </div>
    )
}