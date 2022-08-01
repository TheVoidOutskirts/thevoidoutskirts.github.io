export {Personaggi}
export type {Personaggio, Azione}
import type {TipoDanno} from './Armi'

type Azione = 'arma' | 'presa' | 'spinta' | 'divincolarsi' | 'distrarre' | 'comunicare';

interface Personaggio {
    nome: string,
    // todo
    armatura: string,
    competenzaAttacco: number,
    competenzaDifesa: number,
    armi: { arma: string, modifiche: string[] }[],

    // Campi opzionali
    fazione?: string[],
    luogo?: string[],
    livello?: number,
    livelloDiSfida?: number,
    attributi?: string[],
    statistiche?: {
        gravità_muscolare: [number, number] | undefined
        precisione:   [number, number] | undefined
        ossatura:     [number, number] | undefined
        multitasking: [number, number] | undefined
        calcolo:      [number, number] | undefined
        applicazione: [number, number] | undefined
    },
    competenzeTalenti?: string[],
    dimensioni?: string,
    velocità?: string[],
    sensi?: {
        percezione: number,
        percezionePassiva: number,
        visioneNotturna?: string,
        iniziativa: number
    },
    abilità?: string[],
    azioni?: Azione[],
    vulnerabilità?: Record<TipoDanno, { [k: number]: string }>;
    resistenzaAlDanno?: number,
    oggetti?: string[],
    descrizione?: string
}

const Personaggi: Personaggio[] = [
    {
        nome: "Götz Nowak",
        fazione: ["Repubblica_Congressuale_Marziana","VOMBoR"],
        livello: 3,
        attributi: ["Giocatore","Organico", "Umano"],
        statistiche: {
            gravità_muscolare: [12, +1],
            precisione: [12, +1],
            ossatura: [11, 0],
            multitasking: [12, +1],
            calcolo: [16, +3],
            applicazione: [13, +1],
        },
        competenzeTalenti: ["Inganno (+2)", "Furtività (+2)"],
        dimensioni: "medie",
        velocità: ["cammino (5)", "balzo (4)", "arrampicata (3)"],
        sensi: {
            percezione: +1,
            percezionePassiva: 11,
            iniziativa: +1
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
        armatura: "MCRNSTD",
        competenzaAttacco: 1,
        competenzaDifesa: 1,
        resistenzaAlDanno: 1,
        armi: [{arma: "R52A", modifiche: []},
            {arma: "MMCHG2B", modifiche: []}],
        descrizione: `Spia marziana chiamata da parte del governo per un’indagine segreta su larga scala sulla corruzione estesa che attraversa la Repubblica. A Nowak è assegnato il compito di indagare sull’utilizzo dei fondi marziani destinati agli esperimenti nelle Periferie del Vuoto. Si presenta sotto copertura come Aaron Dack, nuovo ingegnere capo degli esperimenti marziani nelle Periferie. Il suo ruolo durerà 2 anni, nel mentre indagherà sui fondi marziani.`
    },
    {
        nome: "Henry Brison",
        fazione: ["Periferie_del_Vuoto","Repubblica_Congressuale_Marziana","MCRN"],
        livello: 2,
        attributi: ["Giocatore","Organico", "Umano"],
        statistiche: {
            gravità_muscolare: [14, +2],
            precisione: [9, -1],
            ossatura: [10, 0],
            multitasking: [15, +2],
            calcolo: [9, -1],
            applicazione: [10, 0],
        },
        competenzeTalenti: ["Utilizzo di strumenti di precisione e ravvicinati (+2)", "Riparazione (+2)"],
        dimensioni: "medie",
        velocità: ["cammino (5)", "balzo (4)", "arrampicata (3)"],
        sensi: {
            percezione: +2,
            percezionePassiva: 12,
            iniziativa: +2
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
        competenzaAttacco: -1,
        competenzaDifesa: 2,
        resistenzaAlDanno: 0,
        armatura: "MCRNSTD",
        armi: [{arma: "H12", modifiche: []},
            {arma: "MMCHG2B", modifiche: []}],
        descrizione: `33 anni.\nHenry fin da giovane si è distinto durante il suo percorso d'istruzione per le sue capacità di comando e direzione.\nÈ stato scelto per la direzione della sicurezza di un settore dedito a esperimenti di natura pericolosa e che devono essere contenuti. Questa è la direttiva assegnatagli dai suoi superiori su Marte, ed è determinato a fare il miglior lavoro possibile, ad ogni coso.\nPER MARTE!\nLa sua nave è la SSE Horizon, una nave di medie dimensioni e ben armata dotata di un'AI autonoma con la quale Henry ha un link.`
    },
    {
        nome: "Iakot Catinsky",
        fazione: ["Alleanza_dei_Pianeti_Esterni","Clan_degli_Amici_di_Stalin","Spaccastelle_1"],
        livello: 3,
        attributi: ["Giocatore","Organico", "Umano"],
        statistiche: {
            gravità_muscolare: [9, -1],
            precisione: [15, +2],
            ossatura: [11, 0],
            multitasking: [14, +2],
            calcolo: [13, +1],
            applicazione: [16, +3],
        },
        competenzeTalenti: ["Pilotaggio (+2)", "Riparazione (+2)"],
        dimensioni: "medie",
        velocità: ["cammino (5)", "balzo (4)", "arrampicata (3)"],
        sensi: {
            percezione: +2,
            percezionePassiva: 12,
            iniziativa: +2
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
        competenzaAttacco: 2,
        competenzaDifesa: 2,
        resistenzaAlDanno: 0,
        armatura: "UNNLP",
        armi: [{arma: "SR2300", modifiche: []},
            {arma: "SSP5", modifiche: []}],
        descrizione: `Pilota di un grosso cargo “La Spaccastelle 1” di trasporto esperimenti, tra cui molti contenenti stalinio all’interno.\nCinturiano dalla corporatura alta (210 cm) e fragile.`
    },
    {
        nome: "Jason Armstrong",
        fazione: ["Nazioni_Unite_della_Terra","UNN"],
        livello: 3,
        attributi: ["Giocatore","Organico", "Umano"],
        statistiche: {
            gravità_muscolare: [15, +2],
            precisione: [8, -1],
            ossatura: [15, +2],
            multitasking: [16, +3],
            calcolo: [9, -1],
            applicazione: [15, +2],
        },
        competenzeTalenti: ["Utilizzo armi a distanza (+2)", "Furtività (+2)"],
        dimensioni: "medie",
        velocità: ["cammino (5)", "balzo (4)", "arrampicata (3)"],
        sensi: {
            percezione: +3,
            percezionePassiva: 13,
            iniziativa: +3
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
        competenzaAttacco: 2,
        competenzaDifesa: 3,
        resistenzaAlDanno: 2,
        armatura: "UNNLP",
        armi: [{arma: "SR2300", modifiche: []},
            {arma: "SSP5", modifiche: []}],
        descrizione: `Eroe del Kentucky, 34 anni.\nHa l’incarico di accompagnare Robby Nashville alle Periferie del Vuoto e ha accettato l'incarico perché Robby è suo amico e la richiesta è anche stata accettata dal generale, per metterlo al sicuro da possibili ripercussioni dopo aver catturato mele marce, anche la famiglia di Jason l’ha seguito: la moglie Vanessa Tyndall, 29 anni con la figlia Christina Armstrong, 3 anni.\nIntanto Jason farà spionaggio sulle azioni delle altre potenze, per conto delle Nazioni Unite della Terra.\nHanno viaggiato verso le periferie a bordo della nave UNN, UNS Hyperion, con il seguente equipaggio.\n\nA bordo della Hyperion l’equipaggio è così composto.\nRicercatore Robby Nashville, 31 anni. Studia la gravitazione e la distorsione delle dimensioni dovute al portale.\nTenente Roy Barron, 30 anni. A supporto della scorta.\nPilota Nevil Garrison. 45 anni.\nNavigatrice Alice Shana. 35 anni.\nIngegnere Michael Valinx. 31 anni.\nUfficiale Robert Nixon 28 anni.`
    },
    {
        nome: "Lare “Valanga” Senigagliesi",
        fazione: ["Alleanza_dei_Pianeti_Esterni","Clan_Semenza"],
        livello: 3,
        attributi: ["Giocatore","Organico", "Umano"],
        statistiche: {
            gravità_muscolare: [8, -1],
            precisione: [16, +3],
            ossatura: [14, +2],
            multitasking: [15, +2],
            calcolo: [13, +1],
            applicazione: [16, +3],
        },
        competenzeTalenti: ["Combattimento ravvicinato (+2)", "Intimidazione (+2)"],
        dimensioni: "medie",
        velocità: ["cammino (5)", "balzo (4)", "arrampicata (3)"],
        sensi: {
            percezione: +2,
            percezionePassiva: 12,
            iniziativa: +2
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
        competenzaAttacco: 3,
        competenzaDifesa: 2,
        resistenzaAlDanno: 2,
        armatura: "UNNLP",
        armi: [{arma: "VCL2", modifiche: []}],
        descrizione: `23 anni.\nValanga perché quando arriva, lui sposta gli equilibri.\nDa piccolo era uno scagnozzo dei Gioviani\nCompetenze: Combattimento ravvicinato, Intimidazione.\nHa una muscolatura gracile, ma si è procurato un esoscheletro a cui è molto affezionato. Infatti gli ha aggiunto parti crescendo.\nLa mossa tipica è la testata in bocca.\nDa un po' di anni si è messo in proprio e ha iniziato attività di pirateria con l'obiettivo di accrescere la ricchezza propria e del suo clan.\n\nObiettivo: avere il controllo sul portale.\nIl suo clan è il clan Semenza. Il clan svolge pirateria, agricoltura, commercio.\nHa tirato una testata a un tizio e gli ha rubato i documenti per salire su una nave per le Periferie del Vuoto.`
    },
    {
        nome: "Manjiro “Mikey” Sano",
        fazione: ["Repubblica_Congressuale_Marziana","MCRN","Borealis"],
        livello: 3,
        attributi: ["Giocatore","Organico", "Umano"],
        statistiche: {
            gravità_muscolare: [11, 0],
            precisione: [13, +1],
            ossatura: [12, +1],
            multitasking: [14, +2],
            calcolo: [18, +4],
            applicazione: [12, +1],
        },
        competenzeTalenti: ["Combattimento ravvicinato (+2)", "Sopravvivenza (+2)"],
        dimensioni: "medie",
        velocità: ["cammino (5)", "balzo (4)", "arrampicata (3)"],
        sensi: {
            percezione: +2,
            percezionePassiva: 12,
            iniziativa: +2
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
        competenzaAttacco: 1,
        competenzaDifesa: 2,
        resistenzaAlDanno: 1,
        armatura: "MCRAGPA",
        armi: [{arma: "VCL2", modifiche: []}],
        descrizione: `Mikey è un ragazzo ventenne, preparato in programmazione e hacking e sempre alla ricerca di curiosi sviluppi nel campo dell’informatica. Studiava all’accademia militare marziana quando a diciotto anni ha scelto di recarsi per due anni presso un clan di cinturiani per i suoi studi. La nave per il trasporto gli è stata regalata da suo padre, un ufficiale della marina marziana, che trova importante la preparazione militare del figlio, nel caso questo dovesse scendere in azione sul campo. Durante il soggiorno-studio gli è stato offerto un lavoro dal clan cinturiano “Ossacala”, che lo aveva accolto al suo arrivo, per aiutarli a migliorare la loro situazione fisica e conseguentemente essere la loro “cavia” sperimentale. Il clan è infatti segnato da un’eredità genetica di ossa deboli e malattie ossee. Mikey, perfettamente in salute è stato soggetto a esperimenti per confrontare il suo stato di salute con quello dei membri del clan. A capo del progetto c’è Rosa Memei, una ragazza cinturiana della quale Mikey si è innamorato lavorando con lei. Col tempo gli venne proposta la possibilità da Memei di racarsi con lei presso le “Periferie del Vuoto” per lo studio del portale che si trova al loro interno. Le motivazioni erano diverse: ampliare le conoscenze informatiche per Mikey, mentre per entrambi riuscire a trovare una soluzione alla struttura fisica dei cinturiani grazie al portale.\n\n\nLa nave, la Borealis, regalata dal padre è stata quindi modificata per il viaggio interstellare. A bordo si trovano:\nMykey\nMemei\nGatto Abissale (Pilota), Stolthet (copilota), Muzan (ingegnere di bordo).`
    },
    {
        nome: "Rosa Memei",
        fazione: ["Alleanza_dei_Pianeti_Esterni","Clan_Ossacala","Borealis"],
        livello: 3,
        attributi: ["Giocatore","Organico", "Umano"],
        statistiche: {
            gravità_muscolare: [13, +1],
            precisione: [15, +1],
            ossatura: [7, -2],
            multitasking: [14, +2],
            calcolo: [9, -1],
            applicazione: [11, 0],
        },
        competenzeTalenti: ["Utilizzo di strumenti di precisione e ravvicinati (+2)", "Riparazione (+2)"],
        dimensioni: "medie",
        velocità: ["cammino (5)", "balzo (4)", "arrampicata (3)"],
        sensi: {
            percezione: +2,
            percezionePassiva: 12,
            iniziativa: +2
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
        competenzaAttacco: 2,
        competenzaDifesa: 2,
        resistenzaAlDanno: -1,
        armatura: "MCRNSTD",
        armi: [{arma: "VCL2", modifiche: []}],
        descrizione: `Una ragazza di diciannove anni di nome Rosa Memei facente parte di un clan di cinturiani, gli Ossacala presso un piccolo agglomerato di asteroidi. Sono una tribù principalmente povera ma molto preparata in ambito informatico. Il loro scopo principale è cercare di risolvere le problematiche del loro popolo riguardanti la loro struttura fisica, e per questo hanno chiesto aiuto ad un ragazzo marziano, Mikey recatosi presso il loro villaggio per degli studi informatici chiedendogli di sottoporsi ad esperimenti per aiutarli nel loro progetto con a capo per l’appunto la stessa Rosa Memei. Durante il progetto, Memei si innamora di Mikey e decide di offrirgli la possibilità di recarsi presso le Periferie del Vuoto per lo studio del portale all’interno della struttura. Entrambi decidono di comune accordo di recarsi lì con la nave del ragazzo per ampliare le loro conoscenze informatiche e allo stesso tempo cercare di trovare una soluzione al problema fisico dei cinturiani.`
    },
    {
        nome: "Temp “Late”",
        fazione: ["Repubblica_Congressuale_Marziana","Sindacato_degli_spazzini_spaziali"],
        livello: 1,
        attributi: ["Giocatore","Organico", "Umano"],
        statistiche: {
            gravità_muscolare: [16, +3],
            precisione: [12, +1],
            ossatura: [16, +3],
            multitasking: [9, -1],
            calcolo: [8, -1],
            applicazione: [8, -1],
        },
        competenzeTalenti: ["Pilotaggio (+2)", "Movimentazione macchinari (+2)"],
        dimensioni: "medie",
        velocità: ["cammino (5)", "balzo (4)", "arrampicata (3)"],
        sensi: {
            percezione: +2,
            percezionePassiva: 12,
            iniziativa: +2
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
        competenzaAttacco: 1,
        competenzaDifesa: -1,
        resistenzaAlDanno: 3,
        armatura: "Nessuna",
        armi: [{arma: "SSP5", modifiche: []}],
        descrizione: `27 anni.\nUn orfano e già da piccolo faceva lo spazzino spaziale: hard working, having fun.\nCompetenze: Pilotaggio, Movimentazione macchinari\nObiettivo: raggiungere i luoghi più misteriosi dell'universo.\nPassione per l'esplorazione, i bonsai e il sushi.\nClandestino in una nave, ha ammazzato uno per fregargli il posto.\nGli spazzini hanno un sindacato in qualsiasi parte dell'universo.`
    },
    {
        nome: "Muzan",
        fazione: ["Repubblica_Congressuale_Marziana","MCRN","Borealis"],
        attributi: ["Organico", "Umano"],
        statistiche: {
            gravità_muscolare: [13, +1],
            precisione: [12, +1],
            ossatura: [11, 0],
            multitasking: [14, +2],
            calcolo: [14, +2],
            applicazione: [11, 0],
        },
        competenzeTalenti: ["Combattimento ravvicinato (+2)"],
        dimensioni: "medie",
        velocità: ["cammino (5)", "balzo (4)", "arrampicata (3)"],
        sensi: {
            percezione: +2,
            percezionePassiva: 12,
            iniziativa: +2
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
        competenzaAttacco: 2,
        competenzaDifesa: 2,
        resistenzaAlDanno: 0,
        armatura: "MRCNSTD",
        armi: [{arma: "VCL2", modifiche: []}],
        descrizione: `Muzan è un tipo silenzioso e rispettoso dei fatti, ascolta gli ordini senza esitare. Della sua storia si sa poco. Dopo essere stato vittima di abusi da piccolo sono poche le persone di cui si fida e una è proprio Mikey, che ha conosciuto nelle forze armate insieme al resto della squadra.\nSa fare tutto, ma la cosa che sa fare meglio è, le poche volte che parla, azzeccare sempre cosa fare in situzioni di difficoltà.\nL'unica debolezza è la paura dell'acqua nonostante sappia nuotare.`
    },
    {
        nome: "Stolthet",
        fazione: ["Repubblica_Congressuale_Marziana","MCRN","Borealis"],
        attributi: ["Organico", "Umano"],
        statistiche: {
            gravità_muscolare: [11, 0],
            precisione: [12, +1],
            ossatura: [11, 0],
            multitasking: [14, +2],
            calcolo: [13, +1],
            applicazione: [14, +2],
        },
        competenzeTalenti: ["Combattimento ravvicinato (+2)"],
        dimensioni: "medie",
        velocità: ["cammino (5)", "balzo (4)", "arrampicata (3)"],
        sensi: {
            percezione: +2,
            percezionePassiva: 12,
            iniziativa: +2
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
        competenzaAttacco: 2,
        competenzaDifesa: 2,
        resistenzaAlDanno: 0,
        armatura: "MRCNSTD",
        armi: [{arma: "R52A", modifiche: []}],
        descrizione: `Stolthet è un ottimo soldato, ma le sue battute risultano un po' imbarazzanti. Ha conosciuto Mikey nelle forze armate insieme al resto della squadra. A lui lei ricordava qualcuno che egli non riusciva bene a spiegarsi, ma la somiglianza era davvero incredibile. Stolthet viene da una famiglia agiata, ma rigida nelle regole da seguire e questo l'ha aiutata nell'addestramento a seguire gli ordini. Ha avuto un buon percorso di studi e una vita tranquilla. È ingegnosa e ha un'ottima capacità di analisi. A volte risulta un po' fannullona e prima di convincersi a fare le cose per bene ha bisogno di una tazza di té.`
    },
    {
        nome: "Gato Abissale",
        fazione: ["Repubblica_Congressuale_Marziana","MCRN","Borealis"],
        attributi: ["Organico", "Umano"],
        statistiche: {
            gravità_muscolare: [11, 0],
            precisione: [14, +2],
            ossatura: [11, 0],
            multitasking: [14, +2],
            calcolo: [14, +2],
            applicazione: [11, 0],
        },
        competenzeTalenti: ["Pilotaggio (+2)"],
        dimensioni: "medie",
        velocità: ["cammino (5)", "balzo (4)", "arrampicata (3)"],
        sensi: {
            percezione: +2,
            percezionePassiva: 12,
            iniziativa: +2
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
        competenzaAttacco: 2,
        competenzaDifesa: 2,
        resistenzaAlDanno: 0,
        armatura: "MRCNSTD",
        armi: [{arma: "R52A", modifiche: []}],
        descrizione: `Gato è la voce del gruppo che si dispera. Nelle situazioni critiche scoppia a piangere innervosendo l'intero equipaggio, ma proprio quando la situazione sembra irrecuperabile è egli stesso a trovare la soluzione recuperando la situazione. Nelle missioni furtive questo suo modo di fare è particolarmente pericoloso.`
    },
    {
        nome: "Umano",
        fazione: ["Seguaci_di_Kaita"],
        luogo: ["Sistema_Solare","Periferie_del_Vuoto","Proxima_Centauri"],
        attributi: ["Organico", "Umano"],
        livelloDiSfida: 2,
        statistiche: {
            gravità_muscolare: [11, 0],
            precisione: [11, 0],
            ossatura: [11, 0],
            multitasking: [11, 0],
            calcolo: [11, 0],
            applicazione: [11, 0],
        },
        dimensioni: "medie",
        velocità: ["cammino (5)", "balzo (4)", "arrampicata (3)"],
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
        armi: [],
        descrizione: `Umani: costruttori e distruttori delle Periferie del Vuoto, padroni indiscussi del loro piccolo universo, che cercano disperatamente di dominare.`
    },
    {
        nome: "Polizia della UNN",
        fazione: ["Sistema_Solare", "Nazioni_Unite_della_Terra"],
        luogo: ["Periferie_del_Vuoto"],
        attributi: ["Organico", "Umano"],
        livelloDiSfida: 3,
        statistiche: {
            gravità_muscolare: [12, +1],
            precisione: [11, 0],
            ossatura: [12, +1],
            multitasking: [12, +1],
            calcolo: [11, 0],
            applicazione: [11, 0],
        },
        competenzeTalenti: ["Utilizzo armi a distanza (+2)"],
        dimensioni: "medie",
        velocità: ["cammino (5)", "balzo (4)", "arrampicata (3)"],
        sensi: {
            percezione: +1,
            percezionePassiva: 11,
            iniziativa: +1
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
        armatura: "UNNLP",
        competenzaAttacco: 2,
        competenzaDifesa: 1,
        resistenzaAlDanno: 1,
        armi: [{arma: "R25A", modifiche: []},
            {arma: "SSP5", modifiche: []}],
        descrizione: `La polizia della marina delle Nazioni Unite è un secondo braccio della sicurezza della stazione e collabora con i membri della sicurezza vera e propria per mantenere l'ordine, proteggere e aiutare i cittadini della stazione, in particolare i terrestri.`
    },
    {
        nome: "Sciacallo di Kaita",
        fazione: ["Seguaci_di_Kaita"],
        luogo: ["Periferie_del_Vuoto"],
        attributi: ["Organico", "Umano"],
        livelloDiSfida: 2,
        statistiche: {
            gravità_muscolare: [12, +1],
            precisione: [11, 0],
            ossatura: [11, 0],
            multitasking: [12, +1],
            calcolo: [11, 0],
            applicazione: [11, 0],
        },
        dimensioni: "medie",
        velocità: ["cammino (5)", "balzo (4)", "arrampicata (3)"],
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
        competenzaDifesa: 1,
        resistenzaAlDanno: 0,
        armi: [{arma: "F25E", modifiche: []},
            {arma: "SKL", modifiche: []}],
        descrizione: `Povera gente, reclutata per paura o perché l'unico modo per sopravvivere. Tipicamente di etnia cinturiana, gli sciacalli fanno parte di tutti i clan e al contempo di nessuno perché ora commettono il crimine sotto la bandiera nascosta di Kaita.`
    },
    {
        nome: "Soldato della MCRN",
        fazione: ["Repubblica_Congressuale_Marziana"],
        luogo: ["Sistema_Solare","Periferie_del_Vuoto"],
        attributi: ["Organico", "Umano"],
        livelloDiSfida: 3,
        statistiche: {
            gravità_muscolare: [12, +1],
            precisione: [11, 0],
            ossatura: [11, 0],
            multitasking: [12, +1],
            calcolo: [11, 0],
            applicazione: [11, 0],
        },
        competenzeTalenti: ["Utilizzo armi a distanza (+2)"],
        dimensioni: "medie",
        velocità: ["cammino (5)", "balzo (4)", "arrampicata (3)"],
        sensi: {
            percezione: +1,
            percezionePassiva: 11,
            iniziativa: +1
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
        armatura: "MCRNSTD",
        competenzaAttacco: 2,
        competenzaDifesa: 1,
        resistenzaAlDanno: 0,
        armi: [{arma: "H12", modifiche: []},
            {arma: "MMCHG2B", modifiche: []}],
        descrizione: `Fanteria della marina marziana, provvista di equipaggiamento base.`
    },
    {
        nome: "Mutaforma del Vuoto",
        fazione: [],
        luogo: ["Periferie_del_Vuoto"],
        attributi: ["Inorganico", "Creatura_del_Vuoto","Mostro"],
        livelloDiSfida: 1,
        statistiche: {
            gravità_muscolare: [3, -4],
            precisione: [16, +3],
            ossatura: undefined,
            multitasking: [14, +2],
            calcolo: undefined,
            applicazione: undefined,
        },
        dimensioni: "piccole",
        velocità: ["cammino (6)", "balzo (4)", "arrampicata (6)"],
        sensi: {
            percezione: +2,
            percezionePassiva: 12,
            visioneNotturna: "3 caselle",
            iniziativa: +1
        },
        azioni: ["arma", "presa", "spinta", "divincolarsi", "distrarre", "comunicare"],
        vulnerabilità: {
            taglio: {
                1: "ferita mortale"
            },
            perforazione: {
                1: "nessun effetto",
                12: "ferita mortale",
            },
            impatto: {
                1: "nessun effetto",
                4: "ferita mortale",
            },
            elettrico: {
                1: "nessun effetto",
                4: "stordito (perde 1 turno)",
                6: "ferita mortale",
            },
            ustione: {
                1: "nessun effetto",
                3: "ferita mortale",
            }
        },
        armatura: "Nessuna",
        competenzaAttacco: 2,
        competenzaDifesa: 1,
        resistenzaAlDanno: 0,
        armi: [],
        descrizione: `Uno dei tipi di mostri del Vuoto più diffusi, una massa informe capace di muoversi rapidamente strisciando o camminando mutando continuamente la sua forma. Sembra una specie di pongo nero opaco continuamente pulsante e in movimento. Raramente lo si vede nella sua vera forma, avendo grandezza variabile da pochi centimetri fino a un metro, può facilmente trasformarsi in oggetti inanimati e farsi traportare in giro, o addirittura vestire, dagli umani, i principali dominatori dello spazio.\n\nAttacca l’uomo quando da solo o quando è insieme a un branco di mutaforma. Se riesce a entrare dentro il corpo lo drena dall’interno sostentandosi e producendo altri mutaforma; la procedura si svolge in poco più di una decina di secondi.\n\nI mutaforma sono esseri quasi-senzienti prodotti dal portale e che sopravvivono senza l’utilizzo di risorse esterne, ma che sfruttano il corpo degli esseri viventi per riprodursi. Si tratta di esseri di piccole dimensioni con una massa in genere di qualche decimo di chilo e un volume di circa mezzo litro. Non hanno arti, ma possono trasformarsi continuamente per avanzare. Hanno la capacità di riprodurre l’aspetto esteriore di oggetti esterni di dimensioni simili, semplicemente irrigidendo il corpo nella posizione corretta e cambiando colore. La consistenza di questi oggetti rimane sempre la stessa, una specie di gomma. Anche la resistenza è simile alla gomma e gli esseri sono facili da tagliare, ma non hanno parti sensibili, sono omogenei. La separazione in due o più parti di un mutaforma lo porta a diventare una fine polverina nera, causandone di fatto la morte.`
    },
]
