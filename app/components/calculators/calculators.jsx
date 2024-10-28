'use client'
import styles from './calculators.module.css';
import { useLanguage } from '@/app/context/provider';
import { CalculatorButton, Icon } from './calculator-button';
import { getUTMLink, MINING, INDIGENOUS, DEFORESTATION } from '@/app/utils';

const circleBackground = {
    mining: 'rgba(var(--lightgold-rgb), 0.6)',
    indigenous: 'rgba(var(--lightred-rgb), 0.6)',
    deforestation: 'rgba(var(--lightgreen-rgb), 0.6)'
}

export default function Calculators () {
    const { content, language } = useLanguage();
    const { calculators } = content;

    return (
        <div className={styles.calculators}>
            <CalculatorButton
            className={styles.mining}
            circleBackground={circleBackground.mining}
            icon={<Icon className={styles.miningIcon} icon='/assets/garimpo.svg' />}
            title={calculators.mining.title}
            description={calculators.mining.description}
            href={getUTMLink(language, MINING)}
            linkText={calculators.link}
            titleWrap={'balance'}
            />
            <CalculatorButton
            className={styles.indigenous}
            circleBackground={circleBackground.indigenous}
            icon={<Icon className={styles.indigenousIcon} icon='/assets/indigena.svg' />}
            title={calculators.indigenous.title}
            description={calculators.indigenous.description}
            href={getUTMLink(language, INDIGENOUS)}
            linkText={calculators.link}
            titleWrap={'pretty'}
            />
            <CalculatorButton
            className={styles.deforestation}
            circleBackground={circleBackground.deforestation}
            icon={<Icon className={styles.deforestationIcon} icon='/assets/desmatamento.svg' />}
            title={calculators.deforestation.title}
            description={calculators.deforestation.description}
            href={getUTMLink(language, DEFORESTATION)}
            linkText={calculators.link}
            titleWrap={'pretty'}
            />            
        </div>

    )
}

