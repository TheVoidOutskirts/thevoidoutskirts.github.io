
// Arma

export type TipoDanno = 'taglio' | 'perforante' | 'impatto' | 'elettrico' | 'ustione' | 'radiazione';
export type GravitaDanno = 'leggero' | 'pesante';

// MilitaryUnits.ts

export type DimensioniUnita = 'gruppo di fuoco' | 'squadra' | 'pattuglia' | 'plotone' | 'compagnia' | 'battaglione' | 'reggimento' | 'brigata' | 'divisione' | 'corpo d\'armata' | 'armata' | 'gruppo d\'armate';
export type QualitaSensori = 'eccezionali' | 'molto buoni' | 'buoni' | 'medi' | 'scarsi';
export type QualitaAddestramento = 'nessun addestramento' | 'addestramento all\'arma' | 'addestramento regolare' | 'addestramento d\'assalto' | 'addestramento d\'elite';
export type TipoAddestramento = 'abbordaggio' |'guarnigione' |'planetario' |'infiltrazione' |'ricognizione' |'assalto con droni' |'oltre la linea del fronte' |'organizzazione della difesa';
export type TipoSensori = | 'sensori infrarossi'| 'rilevatori di movimento'| 'sensori luce visibile'| 'radiometro'| 'radar';
export type QualitaCriptaggio = 'eccezionale' | 'molto buono' | 'buono' | 'medio' | 'scarso' | 'nessun criptaggio';
export type MezzoComunicazione = 'luce visibile' | 'laser' | 'suono' | 'manovre o gesti' | 'radio morse' | 'radio voice' | 'radio data link';
export type AttrezzaturaUnita = 'stivali magnetici' | 'guanti magnetici' | 'tuta EVA' | 'cavi di sicurezza' | 'propulsori' | 'motore Epstein' | 'ruote' | 'ruote magnetiche' | 'cingoli' | 'gambe robotiche magnetiche';
export type QualitaOccultamento = 'eccezionale' | 'molto buono' | 'buono' | 'medio' | 'scarso';
export type TipoOccultamento = 'tecnologia stealth' | 'riflettori' | 'riduzione traccia radar';
export type QualitaVelocita = 'molto veloce' | 'veloce' | 'media' | 'lenta' | 'molto lenta';

export type Permission = string[] | "*" | ["exclude", string[]]

export type Azione = 'rubavita' | 'genera copia' | 'arma' | 'presa' | 'spinta' | 'divincolarsi' | 'distrarre' | 'comunicare';

export interface WithPermission {
    permission?: Permission
}

export interface Arma extends WithPermission {
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

export type Armi = Arma[]

// Cronologia

export interface Evento extends WithPermission {
    who: string[] | "scenario",
    what: string
}

export interface Giorno extends WithPermission {
    when: { year: number, month: number, day: number },
    events: Evento[],
}

export type Cronologia = Giorno[]

// Personaggio

export interface Personaggio extends WithPermission {
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
        gravit??_muscolare: [number, number] | undefined
        precisione:   [number, number] | undefined
        ossatura:     [number, number] | undefined
        multitasking: [number, number] | undefined
        calcolo:      [number, number] | undefined
        applicazione: [number, number] | undefined
    },
    competenzeTalenti?: string[],
    dimensioni?: string,
    velocit???: string[],
    sensi?: {
        percezione: number,
        percezionePassiva: number,
        visioneNotturna?: string,
        iniziativa: number
    },
    abilit???: string[],
    azioni?: Azione[],
    vulnerabilit???: Record<TipoDanno, { [k: number]: string }>;
    resistenzaAlDanno?: number,
    oggetti?: string[],
    descrizione?: string
}

export type Personaggi = Personaggio[]

// Armatura

export interface Armatura extends WithPermission {
    nome: string;
    codice: string;
    tipoArmatura: string;

    // Campi opzionali
    gravitaDanno: {
        leggero?: Record<TipoDanno, [number, number]>,
        pesante?: Record<TipoDanno, [number, number]>
    };
    funzionalit???: string[];
    vulnerabilit???: Record<TipoDanno, { [k: number]: string }>;
    descrizione?: string;
}

export type Armature = Armatura[]

// Modifiche

interface Modifica extends WithPermission {
    nome: string;
    codice: string;
    modifica: unknown;
}

export type Modifiche = Modifica[]

// SkillTrees

export interface Profession extends WithPermission {
    title: string,
    trees: {
        tier1: string,
        subtiers: {
            tier2: string,
            subtiers: {
                tier3: string,
            }[]
        }[]
    }[]
}

export interface ProfessionPlace {
    place: string,
    professions: Profession[]
}

export interface Skill {
    name: string,
    description: string,
    unlocked?: string[],
}

export interface MilitaryUnitType extends WithPermission {
    nome: string,
    fazione: string,
    classe: string,
    forza: number,
    addestramento: {
        qualit??: QualitaAddestramento,
        lista: TipoAddestramento[],
    },
    dimensioni: {
        dimensioniElementi: number,
        dimensioniUnit??: DimensioniUnita,
    },
    sensori: {
        qualit??: QualitaSensori,
        lista: TipoSensori[],
    },
    comunicazione: {
        raggio: number,
        //raggio in metri
        criptaggio: QualitaCriptaggio,
        mezzo: MezzoComunicazione[],
    },
    velocit??: {
        massima?: number, //in km/h
        accelerazione?: number, //in m/s^3
        qualit???: QualitaVelocita
    },
    attrezzatura: AttrezzaturaUnita[],
    gravit??Operativa:{
        //espressa in g, 1 g = 9.81 m/s^2
        minima: number,
        massima: number,
        ottimale: number,
        resistitaMassima: number,
    },
    occultamento:{
        qualit??: QualitaOccultamento,
        lista: TipoOccultamento[],
    },
    tipo: string,
    armatura: string,
    armi: { tipo: string, quantit??: number }[],
    equipaggiamentoSpeciale: string[],
    capacit??DiTrasporto: number, //in m^3
    descrizione: string,
}
export interface UnitGroupType extends WithPermission {
    nome: string,
    fazione: string,
    forza?: number,
    dimensioni: {
        dimensioniElementi?: number,
        dimensioniUnit??: DimensioniUnita,
    },
    unitaContenute?: string[], //Nomi unit?? contenute
    tipo: string,
    descrizione: string,
}

// Full API data

export type AllData = {
    armi: Arma[];
    armature: Armatura[];
    cronologia: Giorno[];
    personaggi: Personaggio[];
    professions: ProfessionPlace[];
    unita: MilitaryUnitType[];
}
