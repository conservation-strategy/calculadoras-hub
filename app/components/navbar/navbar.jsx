import Image from 'next/image';
import styles from './navbar.module.css';
import { doppio_one } from '@/app/fonts';

export default function Navbar () {

    return (
        <div className={`${styles.navbar} ${doppio_one.className}`}>
            <a>
                <Image
                src={'/assets/logo.svg'}
                alt='logo CSF'
                width={80}
                height={80}
                />
            </a>
            <div className={styles.languageSelector}>
                EN
                <Image
                src={'/keyboard_arrow_down.svg'}
                alt='arrow'
                width={30}
                height={30}
                />
            </div>
        </div>
    )
}