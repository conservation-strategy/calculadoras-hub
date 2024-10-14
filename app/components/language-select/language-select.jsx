'use client'
import styles from './language-select.module.css';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { doppio_one } from '@/app/fonts';

const languages = [
    {
        id: 'EN',
        label: 'English'
    }, 
    {
        id: 'ES',
        label: 'Español'
    }, 
    {
        id: 'PT', 
        label: 'Português'
    }];

// ... existing imports ...

export default function LanguageSelect() {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState('EN');
    const [optionWidth, setOptionWidth] = useState(0);
    const selectRef = useRef(null);
    
    const handleOpen = () => {
        setIsOpen(prev => !prev);
    }

    const handleSelect = (e, lan) => {
        setSelected(lan);
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
                {selected}
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
                        key={lan.id}
                        onClick={(e) => handleSelect(e, lan.id)}
                        className={`${styles.option} ${lan.id === selected ? styles.selected : ''}`}
                        style={{ width: `${optionWidth}px` }}
                    >
                        {lan.id}
                    </li>
                ))}
            </ul>
        </div>
    )
}