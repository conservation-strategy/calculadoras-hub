import Image from 'next/image';
import styles from './navbar.module.css';
import { doppio_one } from '@/app/fonts';
import LanguageSelect from '../language-select/language-select';

export default function Navbar () {

    return (
        <div className={`${styles.navbar}`}>
            <a
            href='https://www.conservation-strategy.org/'
            target='_blank'
            rel='noopener noreferrer'
            >
                <Image
                src={'/assets/logo.svg'}
                alt='logo CSF'
                width={0}
                height={0}
                className={styles.logo}
                />
            </a>
            <LanguageSelect/>
            {/* <div className={styles.languageSelector}>
                EN
                <Image
                src={'/keyboard_arrow_down.svg'}
                alt='arrow'
                width={30}
                height={30}
                />
            </div> */}
        </div>
    )
}