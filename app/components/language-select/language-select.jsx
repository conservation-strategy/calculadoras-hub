'use client'
import styles from './language-select.module.css';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { doppio_one } from '@/app/fonts';
import { languages, useLanguage } from '@/app/context/provider';

export default function LanguageSelect() {
    const [isOpen, setIsOpen] = useState(false);
    // const [selected, setSelected] = useState('EN');
    const { language, setLanguage } = useLanguage();
    const [optionWidth, setOptionWidth] = useState(0);
    const selectRef = useRef(null);
    
    const handleOpen = () => {
        setIsOpen(prev => !prev);
    }

    const handleSelect = (e, lan) => {
        setLanguage(lan);
        setIsOpen(false);
    }

    const handleClickOutside = () => {
        setTimeout(() => {
            setIsOpen(false);
        }, 150);
    }

    useEffect(() => {
        if (selectRef.current) {
            setOptionWidth(selectRef.current.offsetWidth);
        }
    }, []);


    return (
        <div 
        ref={selectRef}
        className={`${styles.select}`}
        onBlur={handleClickOutside}
        >
            <button className={`${styles.button} ${doppio_one.className}`} onClick={handleOpen}>
                {language}
                <div className={`${styles.arrow} ${isOpen ? styles.flipped : ''}`}>
                    <Image
                        src={'/keyboard_arrow_down.svg'}
                        alt='arrow'
                        width={30}
                        height={30}
                    />
                </div>
            </button>
            <ul className={`${styles.dropdown} ${isOpen ? styles.open : ''}`}>
                {languages.map((lan) => (
                    <li 
                        key={lan}
                        onClick={(e) => handleSelect(e, lan)}
                        className={`${styles.option} ${lan === language ? styles.selected : ''}`}
                        style={{ width: `${optionWidth}px` }}
                    >
                        {lan}
                    </li>
                ))}
            </ul>
        </div>
    )
}