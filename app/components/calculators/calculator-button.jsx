import styles from './calculators.module.css';
import { doppio_one } from '@/app/fonts';
import Image from 'next/image';

export function CalculatorButton({ 
    className, 
    circleBackground, 
    icon, 
    title, 
    description,
    href
}) {
    
    return (
        <a className={`${styles.calculatorButton} ${className}`}
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        >
            <div 
            className={styles.circle}
            style={{ backgroundColor: circleBackground }}
            >
                {icon}
            </div>
            <div className={styles.textContainer}>
                <div className={`${styles.title} ${doppio_one.className}`}>
                    {title}
                </div>
                <div className={styles.description}>
                    {description}
                </div>
            </div>
        </a>
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