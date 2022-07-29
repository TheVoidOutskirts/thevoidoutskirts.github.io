import type {TipoDanno} from './Armi';

export {Armature}
export type {Armatura}

interface Armatura {
    nome: string;
    codice: string;
    tipoArmatura: string;

    // Campi opzionali
    gravitaDanno?: {
        leggero?: Record<TipoDanno, [number, number]>,
        pesante?: Record<TipoDanno, [number, number]>
    };
    funzionalità?: string[];
    vulnerabilità?: {
        taglio: { [k: number]: string }
        perforazione: { [k: number]: string }
        elettrico: { [k: number]: string }
    };
    descrizione?: string;
}

const Armature: Armatura[] = [
    {
        nome: "Pelle",
        codice: "Nessuna",
        tipoArmatura: "N/A",
    },
    {
        nome: "Corazza standard della MCRN",
        codice: "MCRNSTD",
        tipoArmatura: "EVA suit",
        gravitaDanno: {
            leggero: {
                taglio: [10, 0],
                perforante: [20, 10],
                impatto: [30, 15],
                elettrico: [0, 0],
                ustione: [0, 10],
                radiazione: [0, 0]
            }
        }
    },
    {
        nome: "Goliath Powered Armor",
        codice: "MCRAGPA",
        tipoArmatura: "Powered EVA suit (armatura pesante)",
        gravitaDanno: {
            leggero: {
                taglio: [96, 0],
                perforante: [96, 0],
                impatto: [94, 30],
                elettrico: [80, 0],
                ustione: [20, 10],
                radiazione: [15, 0]
            },
            pesante: {
                taglio: [0, 0],
                perforante: [20, 0],
                impatto: [30, 10],
                elettrico: [0, 0],
                ustione: [0, 0],
                radiazione: [0, 0]
            }
        },
        funzionalità: [
            "Sistema di comunicazione integrato",
            "Tuta per attività extraveicolari: permette di sopravvivere in vuoto",
            "Riserva di ossigeno: 8 ore",
            "Batteria centralina: 10 ore",
            "Faro anteriore d'illuminazione",
            "Stivali magnetici",
            "Guanti magnetici",
            "Thrusters di controllo",
            "Servomotori di potenziamento al movimento",
            "[[Rogun 100 rpm]]"
        ],
        vulnerabilità: {
            taglio: {
                1: "nessun effetto",
                4: "piccola apertura",
                6: "squarcio",
            },
            perforazione: {
                1: "nessun effetto",
                2: "foratura della riserva di ossigeno",
                5: "squarcio",
                9: "servomotore danneggiato",
                14: "distruzione della centralina di controllo"
            },
            elettrico: {
                1: "nessun effetto",
                9: "spegnimento della centralina di controllo"
            },
        },
        descrizione: `Armatura pesante utilizzata dalle truppe speciali dell'esercito marziano. Può essere utilizzata come testa di ponte in una carica o in un'assalto o essere posizionata a bloccare un passaggio strategico. Il combattimento visto da questa piattaforma corazzata è caratterizzabile come una via di mezzo tra il combattimento di fanteria e quello di una di una piattaforma robotizzata.`
    },
    {
        nome: "Lenovatimen High-g Armor",
        codice: "LHGA",
        tipoArmatura: "Powered armor (armatura media)",
        gravitaDanno: {
            leggero: {
                taglio: [80, 20],
                perforante: [80, 20],
                impatto: [75, 25],
                elettrico: [60, 5],
                ustione: [60, 13],
                radiazione: [0, 0]
            },
            pesante: {
                taglio: [0, 0],
                perforante: [15, 0],
                impatto: [20, 0],
                elettrico: [0, 0],
                ustione: [10, 0],
                radiazione: [0, 0]
            }
        }
    },
    {
        nome: "Corazza Lenovatimen Micro",
        codice: "LMA",
        tipoArmatura: "EVA suit (micro-armatura media)",
        gravitaDanno: {
            leggero: {
                taglio: [5, 0],
                perforante: [10, 0],
                impatto: [15, 0],
                elettrico: [0, 0],
                ustione: [0, 0],
                radiazione: [0, 0]
            }
        }
    }
]
