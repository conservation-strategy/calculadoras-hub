'use client'
import styles from './calculators.module.css';
import { doppio_one } from '@/app/fonts';
import Image from 'next/image';
import { useCallback, useState, useEffect, useRef } from 'react';

const DESKTOP_BREAKPOINT = 1025;
// const TABLET_BREAKPOINT = 744;

export function CalculatorButton({ 
    className, 
    circleBackground, 
    icon, 
    title, 
    description,
    linkText,
    href
}) {
    const [isDesktop, setIsDesktop] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    
    const handleClick = useCallback(() => {
        if(isDesktop) {
            window.open(href, '_blank', 'noopener,noreferrer');
        } else {
            setIsOpen(!isOpen);
        }
    }, [href, isDesktop, setIsOpen, isOpen]);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsDesktop(window.innerWidth >= DESKTOP_BREAKPOINT);
        };
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);
    
    return (
        <button className={`${styles.calculatorButton} ${className}`}
        onClick={handleClick}
        >
            <div className={styles.main}>
                <div 
                className={styles.circle}
                style={{ backgroundColor: circleBackground }}
                >
                    {icon}
                </div>
                <div className={`${styles.title} ${styles.mobile} ${doppio_one.className}`}>
                    {title}
                </div>
            </div>
            <div className={styles.mobile}>
                <Accordion isOpen={isOpen} description={description} linkText={linkText} href={href}/>
            </div>
            <div className={styles.desktop}>
                <div className={styles.textContainer}>
                    <div className={`${styles.title} ${doppio_one.className}`}>
                        {title}
                    </div>
                    <div className={styles.description}>
                        {description}
                    </div>
                    <a className={`${styles.hiddenText} ${styles.link}`}>{linkText}</a>
                </div>                
            </div>
        </button>
    )
}

export function Icon ({ className, icon }) {
    return (
        <div className={className}>
            <Image
            src={icon}
            alt={`${icon.slice(8)}`}
            height={0}
            width={0}
            style={{
                width: '100%',
                height: 'auto',                            
            }}
            />
        </div>
    )
}

function Accordion ({ isOpen, description, href, linkText }) {
    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState(0);
    
    const updateContentHeight = useCallback(() => {
        if (contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight);
        }
    }, []);

    useEffect(() => {
        updateContentHeight();
        window.addEventListener('resize', updateContentHeight);

        return () => window.removeEventListener('resize', updateContentHeight);
    }, [updateContentHeight]);

    useEffect(() => {
        updateContentHeight();
    }, [description, linkText, updateContentHeight]);

    return (
        <div className={styles.accordionContainer}>
            <Image
                src={'/keyboard_arrow_down.svg'}
                alt='arrow'
                width={0}
                height={0}
                className={`${styles.arrow} ${isOpen ? styles.flipped : ''}`}
            />
            <div 
                className={styles.accordionWrapper} 
                style={{ height: isOpen ? `${contentHeight}px` : '0px' }}
            >
                <div className={`${styles.accordion} ${isOpen ? styles.open : ''}`} ref={contentRef}>
                    <div className={styles.description}>
                        {description}
                    </div>
                    <a className={styles.link}
                    href={href}
                    target='_blank'
                    rel='noopener noreferrer'
                    onClick={(e) => e.stopPropagation()}
                    >
                        {linkText}
                    </a>
                </div>
            </div>
        </div>
    )
}