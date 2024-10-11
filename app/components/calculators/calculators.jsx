import { doppio_one } from '@/app/fonts';
import styles from './calculators.module.css';
import Image from 'next/image';

export default function Calculators () {

    return (
        <div className={styles.calculators}>
            <a className={`${styles.calculatorButton} ${styles.mining}`}
            href=''
            target='_blank'
            rel='noopener noreferrer'
            >
                <div 
                className={styles.circle}
                style={{ backgroundColor: 'rgba(var(--lightgold-rgb), 0.6)'}}
                >
                    <div className={styles.miningIcon}>
                        <Image
                        src={'/assets/garimpo.svg'}
                        alt='Calculadora do Garimpo'
                        height={0}
                        width={0}
                        style={{
                            width: '100%',
                            height: 'auto',                            
                        }}
                        />
                    </div>
                </div>
                <div className={styles.textContainer}>
                    <div className={`${styles.title} ${doppio_one.className}`}>
                        Mining Impacts Calculator
                    </div>
                    <div className={styles.description}>
                        Estimates the costs of the social and environmental 
                        damages caused by small-scale gold mining.
                    </div>
                </div>
            </a>

            <a className={`${styles.calculatorButton} ${styles.indigenous}`}
            href=''
            target='_blank'
            rel='noopener noreferrer'
            >
                <div 
                className={styles.circle}
                style={{ backgroundColor: 'rgba(var(--lightred-rgb), 0.6)'}}
                >
                    <div className={styles.indigenousIcon}>
                        <Image
                        src={'/assets/indigena.svg'}
                        alt='Calculadora do Garimpo'
                        height={0}
                        width={0}
                        style={{
                            width: '100%',
                            height: 'auto',                            
                        }}
                        />
                    </div>
                </div>
                <div className={styles.textContainer}>
                    <div className={`${styles.title} ${doppio_one.className}`}>
                        Indigenous Management Cost 
                    Calculator</div>
                    <div className={styles.description}>
                        Estimates the costs of implementing Indigenous
                        territorial management plans.
                    </div>
                </div>
            </a>

            <a className={`${styles.calculatorButton} ${styles.deforestation}`}
            href=''
            target='_blank'
            rel='noopener noreferrer'
            >
                <div 
                className={styles.circle}
                style={{ backgroundColor: 'rgba(var(--lightgreen-rgb), 0.6)'}}
                >
                    <div className={styles.deforestationIcon}>
                        <Image
                        src={'/assets/desmatamento.svg'}
                        alt='Calculadora do Garimpo'
                        height={0}
                        width={0}
                        style={{
                            width: '100%',
                            height: 'auto',                            
                        }}
                        />
                    </div>
                </div>
                <div className={styles.textContainer}>
                    <div className={`${styles.title} ${doppio_one.className}`}>
                        deforestation impacts calculator
                    </div>
                    <div className={styles.description}>
                        Estimates the costs of the social and environmental damages
                        caused by deforestation in the Amazon.
                    </div>
                </div>
            </a>
        </div>

    )
}