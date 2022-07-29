export {Personaggi}
export type {Personaggio}

interface Personaggio {
    nome: string,
    nomeCompleto: string,
    // todo
    armatura: string,
    competenzaAttacco: number,
    competenzaDifesa: number,
    armi: { arma: string, modifiche: string[] }[],

    // Campi opzionali
    fazione?: string,
    luogo?: string,
    livelloDiSfida?: number,
    attributi?: string,
    statistiche?: {
        gravità_muscolare: [number, number]
        precisione:   [number, number]
        ossatura:     [number, number]
        multitasking: [number, number]
        calcolo:      [number, number]
        applicazione: [number, number]
    },
    sensi?: {
        percezione: number,
        percezionePassiva: number,
        iniziativa: number
    },
    dimensioni?: string
    azioni?: string[],
    vulnerabilità?: {
        taglio:       { [k: number]: string }
        perforazione: { [k: number]: string }
        impatto:      { [k: number]: string }
        elettrico:    { [k: number]: string }
        ustione:      { [k: number]: string }
    },
    resistenzaAlDanno?: number,
    descrizione?: string
}

const Personaggi: Personaggio[] = [
    {
        nomeCompleto: "Aaron Dack",
        nome: "Aaron",
        armatura: "MCRNSTD",
        competenzaAttacco: 1,
        competenzaDifesa: 1,
        armi: [{arma: "H12", modifiche: []}, {arma: "V1S", modifiche: []}]
    },
    {
        nomeCompleto: "Jason Armstrong",
        nome: "Jason",
        armatura: "MCRNSTD",
        competenzaAttacco: 2,
        competenzaDifesa: 3,
        armi: [{arma: "VCL2", modifiche: []}]
    },
    {
        nomeCompleto: "Mikey Mushimura",
        nome: "Mikey",
        armatura: "MCRAGPA",
        competenzaAttacco: 1,
        competenzaDifesa: 2,
        armi: [{arma: "VCL2", modifiche: []}]
    },
    {
        nomeCompleto: "Rosa Memei",
        nome: "Rosa",
        armatura: "MCRNSTD",
        competenzaAttacco: 2,
        competenzaDifesa: 2,
        armi: [{arma: "VCL2", modifiche: []}]
    },
    {
        nomeCompleto: "Valanga 'Lare' Senigagliesi",
        nome: "Valanga",
        armatura: "MCRNSTD",
        competenzaAttacco: 3,
        competenzaDifesa: 2,
        armi: [{arma: "VCL2", modifiche: []}]
    },
    {
        nomeCompleto: "Iacot Katinsky",
        nome: "Iacot",
        armatura: "MCRAGPA",
        competenzaAttacco: 2,
        competenzaDifesa: 2,
        armi: [{arma: "R52A", modifiche: []}, {arma: "V1S", modifiche: []}]
    },
    {
        nomeCompleto: "Sciacallo di Kaita",
        nome: "Sciacallo",
        fazione: "#Seguaci_di_Kaita",
        luogo: "#Periferie_del_Vuoto",
        attributi: "#Organico, #Umano",
        livelloDiSfida: 2,
        statistiche: {
            gravità_muscolare: [12, 0],
            precisione: [11, 0],
            ossatura: [11, 0],
            multitasking: [12, 0],
            calcolo: [11, 0],
            applicazione: [11, 0],
        },
        dimensioni: "medie",
        sensi: {
            percezione: 0,
            percezionePassiva: 10,
            iniziativa: 0
        },
        azioni: ["arma", "presa", "spinta", "divincolarsi", "distrarre", "comunicare"],
        vulnerabilità: {
            taglio: {
                1: "ferita leggera",
                6: "ferita grave",
                10: "fuori combattimento + ferita grave",
                14: "ferita mortale"
            },
            perforazione: {
                1: "ferita leggera",
                6: "ferita grave",
                10: "fuori combattimento + ferita grave",
                14: "ferita mortale",
            },
            impatto: {
                4: "stordito",
                8: "ferita leggera + stordito",
                10: "ferita grave + stordito",
                12: "fuori combattimento + ferita grave",
                16: "ferita mortale",
            },
            elettrico: {
                1: "nessun effetto",
                4: "stordito (perde 1 turno)",
                8: "shock (perde 1 turno e la copertura)",
                10: "fuori combattimento",
                14: "ferita mortale",
            },
            ustione: {
                1: "ferita leggera",
                6: "ferita grave",
                10: "fuori combattimento + ferita grave",
                14: "ferita mortale",
            }
        },
        armatura: "Nessuna",
        competenzaAttacco: 0,
        competenzaDifesa: 0,
        resistenzaAlDanno: 0,
        armi: [{arma: "F25E", modifiche: []},
            {arma: "SKL", modifiche: []}],
        descrizione: `Povera gente, reclutata per paura o perché l'unico modo per sopravvivere. Tipicamente di etnia cinturiana, gli sciacalli fanno parte di tutti i clan e al contempo di nessuno perché ora commettono il crimine sotto la bandiera nascosta di Kaita.`
    },
    {
        nomeCompleto: "Soldato della MRCN",
        nome: "Soldato",
        armatura: "MCRNSTD",
        competenzaAttacco: 2,
        competenzaDifesa: 2,
        armi: [{arma: "MMCHG2B", modifiche: []}, {arma: "V1S", modifiche: []}]
    },
    {
        nomeCompleto: "Muzan",
        nome: "Muzan",
        armatura: "MCRNSTD",
        competenzaAttacco: 2,
        competenzaDifesa: 2,
        armi: [{arma: "VCL2", modifiche: []}]
    },
    {
        nomeCompleto: "Stolthet",
        nome: "Stolthet",
        armatura: "MCRNSTD",
        competenzaAttacco: 2,
        competenzaDifesa: 2,
        armi: [{arma: "R52A", modifiche: []}]
    },
    {
        nomeCompleto: "Task Force Duskiane",
        nome: "DuskTF",
        armatura: "LHGA",
        competenzaAttacco: 3,
        competenzaDifesa: 2,
        armi: [{arma: "CTNTASCI", modifiche: []}]
    },
    {
        nomeCompleto: "Task Force Duskiane Micro Force",
        nome: "DuskTF Micro",
        armatura: "LMA",
        competenzaAttacco: 2,
        competenzaDifesa: 2,
        armi: [{arma: "CTNTAECM", modifiche: []}]
    },
]
