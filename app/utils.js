import { ENGLISH, PORTUGUESE, SPANISH } from "./context/provider";

export const MINING = 'mining';
export const INDIGENOUS = 'indigenous';
export const DEFORESTATION = 'deforestation';

const UTMLinks = {
    [SPANISH]:{
        [MINING]: 'https://miningcalculator.conservation-strategy.org/?utm_source=site_hub&utm_medium=botao_principal_site&utm_campaign=es_gar_botao_hub',
        [INDIGENOUS]: 'https://indigenouscalculator.conservation-strategy.org/?utm_source=site_hub&utm_medium=botao_principal_site&utm_campaign=es_ind_botao_hub',
        [DEFORESTATION]: 'https://deforestationcalculator.conservation-strategy.org/?utm_source=site_hub&utm_medium=botao_principal_site&utm_campaign=es_des_botao_hub'
    },
    [ENGLISH]:{
        [MINING]: 'https://miningcalculator.conservation-strategy.org/?utm_source=site_hub&utm_medium=botao_principal_site&utm_campaign=en_gar_botao_hub',
        [INDIGENOUS]: 'https://indigenouscalculator.conservation-strategy.org/?utm_source=site_hub&utm_medium=botao_principal_site&utm_campaign=en_ind_botao_hub',
        [DEFORESTATION]: 'https://deforestationcalculator.conservation-strategy.org/?utm_source=site_hub&utm_medium=botao_principal_site&utm_campaign=en_des_botao_hub' 
    },
    [PORTUGUESE]: {
        [MINING]: 'https://miningcalculator.conservation-strategy.org/?utm_source=site_hub&utm_medium=botao_principal_site&utm_campaign=pt_gar_botao_hub',
        [INDIGENOUS]: 'https://indigenouscalculator.conservation-strategy.org/?utm_source=site_hub&utm_medium=botao_principal_site&utm_campaign=pt_ind_botao_hub',
        [DEFORESTATION]: 'https://deforestationcalculator.conservation-strategy.org/?utm_source=site_hub&utm_medium=botao_principal_site&utm_campaign=pt_des_botao_hub'
    }
}


export function getUTMLink (language, calculator) {
    return UTMLinks[language][calculator]
}