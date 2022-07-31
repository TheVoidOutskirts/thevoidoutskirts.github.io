import type {TipoDanno} from './Armi';

export {Armature}
export type {Armatura}

interface Armatura {
    nome: string;
    codice: string;
    tipoArmatura: string;

    // Campi opzionali
    gravitaDanno: {
        leggero?: Record<TipoDanno, [number, number]>,
        pesante?: Record<TipoDanno, [number, number]>
    };
    funzionalità?: string[];
    vulnerabilità?: Record<TipoDanno, { [k: number]: string }>;
    descrizione?: string;
}

const Armature: Armatura[] = [
    {
        nome: "Pelle",
        codice: "Nessuna",
        tipoArmatura: "N/A",
        gravitaDanno: {

        }
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
                radiazione: [5, 0]
            }
        },
        funzionalità: [
          "Sistema di comunicazione integrato",
          "Tuta per attività extra-veicolari: permette di sopravvivere in, vuoto",
          "Riserva di ossigeno: 6 ore",
          "Batteria centralina: 30 ore",
          "Faro anteriore d'illuminazione",
          "Stivali magnetici",
        ],
        vulnerabilità: {
            taglio: {
                1: "piccola apertura",
                3: "squarcio",
            },
            perforante: {
                1: "piccola apertura",
                5: "foratura della riserva di ossigeno",
            },
            elettrico: {
                1: "nessun effetto",
            },
            impatto: {
                1: "nessun effetto",
            },
            ustione: {
                1: "nessun effetto",
            },
            radiazione: {
                1: "nessun effetto",
            }
        },
        descrizione: `Armatura utilizzata per le tute della marina marziana.`
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
            perforante: {
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
            impatto: {
                1: "nessun effetto",
            },
            ustione: {
                1: "nessun effetto",
            },
            radiazione: {
                1: "nessun effetto",
            }
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
                radiazione: [15, 0]
            },
            pesante: {
                taglio: [0, 0],
                perforante: [15, 0],
                impatto: [20, 0],
                elettrico: [0, 0],
                ustione: [10, 0],
                radiazione: [4, 0]
            }
        },
        vulnerabilità: {
            taglio: {
                9: "servomotore danneggiato",
                14: "distruzione della centralina di controllo",
            },
            perforante: {
                1: "nessun effetto",
            },
            elettrico: {
                9: "spegnimento della centralina di controllo",
            },
            impatto: {
                1: "nessun effetto",
            },
            ustione: {
                1: "nessun effetto",
            },
            radiazione: {
                1: "nessun effetto",
            }
        },
        funzionalità: [
            "Sistema di comunicazione integrato",
            "Batteria centralina: 10 ore",
            "Faro anteriore d'illuminazione",
            "Stivali magnetici",
            "Servomotori di potenziamento al movimento",
        ],
        descrizione: "Corazza potenziata utilizzata su Dusk, particolarmente cara alle truppe speciali duskiane per la capacità di assorbimento dei danni e la relativa sicurezza che offre in battaglia."
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
                radiazione: [5, 0]
            }
        },
        funzionalità: [
            "Sistema di comunicazione integrato",
            "Tuta per attività extra-veicolari: permette di sopravvivere in vuoto.",
            "Riserva di ossigeno: 6 ore",
            "Batteria centralina: 30 ore",
            "Faro anteriore d'illuminazione",
            "Stivali magnetici",
        ],
        vulnerabilità: {
            taglio: {
                1: "piccola apertura",
                3: "squarcio",
            },
            perforante: {
                1: "piccola apertura",
                5: "foratura della riserva di ossigeno",
            },
            elettrico: {
                1: "nessun effetto",
            },
            impatto: {
                1: "nessun effetto",
            },
            ustione: {
                1: "nessun effetto",
            },
            radiazione: {
                1: "nessun effetto",
            }
        },
        descrizione: `Armatura utilizzata per le tute della marina marziana.`
    },
    {
        nome: "Earthound SpecOps Powered",
        codice: "ESOP",
        tipoArmatura: "EVA suit (armatura media)",
        gravitaDanno: {
            leggero: {
                taglio: [15, 5],
                perforante: [25, 10],
                impatto: [20, 10],
                elettrico: [30, 0],
                ustione: [45, 0],
                radiazione: [10, 0]
            }
        },
        funzionalità: [
            "Sistema di comunicazione integrato",
            "Tuta per attività extra-veicolari: permette di sopravvivere in vuoto.",
            "Riserva di ossigeno: 6 ore",
            "Batteria centralina: 20 ore",
            "Faro anteriore d'illuminazione",
            "Stivali magnetici",
            "Servomotori di potenziamento al movimento",
            "Liquido sigillante: dopo 1 turno sigilla piccole aperture e fino a una foratura della riserva di ossigeno.",
        ],
        vulnerabilità: {
            taglio: {
                1: "piccola apertura",
                3: "squarcio",
            },
            perforante: {
                1: "piccola apertura",
                5: "foratura della riserva di ossigeno",
            },
            elettrico: {
                1: "nessun effetto",
            },
            impatto: {
                1: "nessun effetto",
            },
            ustione: {
                1: "nessun effetto",
            },
            radiazione: {
                1: "nessun effetto",
            }
        },
        descrizione: `Divisa d'ordinanza da combattimento navale e arrembaggio della marina terrestre.`
    },
    {
        nome: "Extract 3",
        codice: "EXT3",
        tipoArmatura: "EVA suit (armatura media)",
        gravitaDanno: {
            leggero: {
                taglio: [12, 2],
                perforante: [23, 13],
                impatto: [30, 15],
                elettrico: [0, 0],
                ustione: [20, 10],
                radiazione: [8, 0]
            }
        },
        funzionalità: [
            "Sistema di comunicazione integrato",
            "Tuta per attività extra-veicolari: permette di sopravvivere in vuoto.",
            "Riserva di ossigeno: 6 ore",
            "Batteria centralina: 30 ore",
            "Faro anteriore d'illuminazione",
            "Stivali magnetici",
            "Thrusters di controllo",
        ],
        vulnerabilità: {
            taglio: {
                1: "piccola apertura",
                3: "squarcio",
            },
            perforante: {
                1: "piccola apertura",
                5: "foratura della riserva di ossigeno",
            },
            elettrico: {
                1: "nessun effetto",
            },
            impatto: {
                1: "nessun effetto",
            },
            ustione: {
                1: "nessun effetto",
            },
            radiazione: {
                1: "nessun effetto",
            }
        },
        descrizione: `Armatura utilizzata dalle unità speciali di Kaita per il furto o il recupero di oggetti e persone importanti.`
    },

    {
        nome: "UNN Outer",
        codice: "UNNO",
        tipoArmatura: "EVA suit (armatura media)",
        gravitaDanno: {
            leggero: {
                taglio: [10, 0],
                perforante: [20, 5],
                impatto: [20, 10],
                elettrico: [0, 0],
                ustione: [20, 0],
                radiazione: [5, 0]
            }
        },
        funzionalità: [
            "Sistema di comunicazione integrato",
            "Tuta per attività extra-veicolari: permette di sopravvivere in vuoto.",
            "Riserva di ossigeno: 6 ore",
            "Batteria centralina: 30 ore",
            "Faro anteriore d'illuminazione",
            "Stivali magnetici",
        ],
        vulnerabilità: {
            taglio: {
                1: "piccola apertura",
                3: "squarcio",
            },
            perforante: {
                1: "piccola apertura",
                5: "foratura della riserva di ossigeno",
            },
            elettrico: {
                1: "nessun effetto",
            },
            impatto: {
                1: "nessun effetto",
            },
            ustione: {
                1: "nessun effetto",
            },
            radiazione: {
                1: "nessun effetto",
            }
        },
        descrizione: `Divisa d'ordinanza da combattimento navale e arrembaggio della marina terrestre.`
    },
    {
        nome: "UNN Local Police",
        codice: "UNNLP",
        tipoArmatura: "Bulletproof armor (armatura media)",
        gravitaDanno: {
            leggero: {
                taglio: [5, 0],
                perforante: [20, 15],
                impatto: [20, 10],
                elettrico: [0, 0],
                ustione: [3, 2],
                radiazione: [5, 0]
            }
        },
        funzionalità: [
            "Stivali magnetici",
        ],
        vulnerabilità: {
            taglio: {
                5: "squarcio",
            },
            perforante: {
                1: "nessun effetto",
            },
            elettrico: {
                1: "nessun effetto",
            },
            impatto: {
                1: "nessun effetto",
            },
            ustione: {
                1: "nessun effetto",
            },
            radiazione: {
                1: "nessun effetto",
            }
        },
        descrizione: `Divisa più comoda utilizzata dagli elementi della marina terrestre che hanno la funzione di polizia locale. Data la robustezza delle pareti della stazione, non è strettamente necessario avere sempre dietro una tuta spaziale.`
    },
    {
        nome: "Plated EVA suit",
        codice: "PEVAS",
        tipoArmatura: "EVA suit (armatura pesante)",
        gravitaDanno: {
            leggero: {
                taglio: [30, 8],
                perforante: [45, 15],
                impatto: [40, 25],
                elettrico: [20, 0],
                ustione: [40, 15],
                radiazione: [5, 0]
            }
        },
        funzionalità: [
            "Sistema di comunicazione integrato",
            "Tuta per attività extra-veicolari: permette di sopravvivere in vuoto.",
            "Riserva di ossigeno: 6 ore",
            "Batteria centralina: 30 ore",
            "Faro anteriore d'illuminazione",
            "Stivali magnetici",
        ],
        vulnerabilità: {
            taglio: {
                1: "piccola apertura",
                3: "squarcio",
            },
            perforante: {
                1: "piccola apertura",
                5: "foratura della riserva di ossigeno",
            },
            elettrico: {
                1: "nessun effetto",
            },
            impatto: {
                1: "nessun effetto",
            },
            ustione: {
                1: "nessun effetto",
            },
            radiazione: {
                1: "nessun effetto",
            }
        },
        descrizione: `Una versione a basso costo di una corazza pesante, ottenuta semplicemente fissando delle piastre metalliche a una tuta spaziale.`
    },
]
