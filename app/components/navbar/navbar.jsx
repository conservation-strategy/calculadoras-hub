import Image from 'next/image';
import styles from './navbar.module.css';
import { doppio_one } from '@/app/fonts';
import LanguageSelect from '../language-select/language-select';

export default function Navbar () {

    return (
        <div className={`${styles.navbar}`}>
            <a>
                <Image
                src={'/assets/logo.svg'}
                alt='logo CSF'
                width={64}
                height={64}
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