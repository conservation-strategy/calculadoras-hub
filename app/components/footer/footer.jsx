import Image from 'next/image';
import styles from './footer.module.css';
import { duru_sans } from '@/app/fonts';

export default function Footer () {

    return (
        <div className={`${styles.footer} ${duru_sans.className}`}>
            <Socials/>            
            <div>
                About CSF{' '}
                <a style={{ textDecoration: 'underline' }}>
                    here
                </a>
            </div>
            <div>
                contact: <a href="mailto:csfbrasil@conservation-strategy.org" className={styles.link}>
                    csfbrasil@conservation-strategy.org
                </a>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.footnote}>
                <div>CSF is not resposible for the consequences of using the calculator.</div>
                <div>Copyright ©️ 2024 CSF All rights reserved.</div>
            </div>            
        </div>
    )
}

const Socials = () => {

    return (
        <div className={styles.socials}>
                <a>
                    <Image
                    src={'/IN-icon.svg'}
                    alt='IN icon'
                    width={38}
                    height={38}
                    />
                </a>
                <a>
                    <Image
                    src={'/YT-icon.svg'}
                    alt='YT icon'
                    width={38}
                    height={38}
                    />
                </a>
                <a>
                    <Image
                    src={'/IG-icon.svg'}
                    alt='IG icon'
                    width={38}
                    height={38}
                    />
                </a>
                <a>
                    <Image
                    src={'/X-icon.svg'}
                    alt='X icon'
                    width={38}
                    height={38}
                    />
                </a>
                <a>
                    <Image
                    src={'/fb-icon.svg'}
                    alt='fb icon'
                    width={38}
                    height={38}
                    />
                </a>
            </div>
    )
}