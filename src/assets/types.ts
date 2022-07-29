interface Personaggio {
    nome: string,
    nomeCompleto: string,
    armatura: ArmiStatic as const, //ArmiStatic.map(x => x.nome),
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
        precisione: [number, number]
        ossatura: [number, number]
        multitasking: [number, number]
        calcolo: [number, number]
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
        taglio: { [k: number]: string }
        perforazione: { [k: number]: string }
        impatto: { [k: number]: string }
        elettrico: { [k: number]: string }
        ustione: { [k: number]: string }
    },
    resistenzaAlDanno?: number,
    descrizione?: string
}

interface Arma {
    nome: string;
    codice: string;
    tipo: string;
    danno: number[];
    tipoDanno: TipoDanno;
    gravitaDanno: GravitaDanno;
    modifiche_poss: string[];
    probabilita: number[];
    descrizione: string;

    // Campi opzionali
    descrizione_danno?: string;
    raggio?: string[][];
}

type TipoDanno = 'taglio' | 'perforante' | 'impatto' | 'elettrico' | 'ustione' | 'radiazione' | 'accecante';
type GravitaDanno = 'leggero' | 'pesante';

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

interface Modifica {
    nome: string;
    codice: string;
    modifica: any;
}

export type {Personaggio, Arma, Armatura, Modifica, TipoDanno, GravitaDanno}
