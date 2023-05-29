
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
export type NATOUnitType = 'combat' | 'infantry' | 'armor' | 'wheeled' | 'track' | 'legged' | 'antiarmor' | 'light' | 'medium' | 'heavy' | 'motorized' | 'naval' | 'naval assault' | 'breach pods' | 'engineer' | 'costruction' | 'rocket' | 'reconnaissance' | 'missile' | 'internal security forces' | 'combat support' | 'cbrn' | 'military intelligence' | 'operations' | 'interrogation' | 'law enforcement unit' | 'military police' | 'radio unit' | 'information warfare unit' | 'administrative' | 'medical' | 'supply' | 'transportation' | 'maintenance';

export type Permission = string[] | "*"

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


//Fazioni

export interface Paragrafo extends WithPermission {
    title: string,
    body: string
}

export interface Fazione extends WithPermission {
    name: string,
    tag: string,
    acronimo: string,
    paragrafi: Paragrafo[]
}

export type Fazioni = Fazione[]


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
    funzionalità?: string[];
    vulnerabilità?: Record<TipoDanno, { [k: number]: string }>;
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
        qualità: QualitaAddestramento,
        lista: TipoAddestramento[],
    },
    dimensioni: {
        dimensioniElementi: number,
        dimensioniUnità: DimensioniUnita,
    },
    sensori: {
        qualità: QualitaSensori,
        lista: TipoSensori[],
    },
    comunicazione: {
        raggio: number,
        //raggio in metri
        criptaggio: QualitaCriptaggio,
        mezzo: MezzoComunicazione[],
    },
    velocità: {
        massima?: number, //in km/h
        accelerazione?: number, //in m/s^3
        qualità?: QualitaVelocita
    },
    attrezzatura: AttrezzaturaUnita[],
    gravitàOperativa:{
        //espressa in g, 1 g = 9.81 m/s^2
        minima: number,
        massima: number,
        ottimale: number,
        resistitaMassima: number,
    },
    occultamento:{
        qualità: QualitaOccultamento,
        lista: TipoOccultamento[],
    },
    tipo: string,
    armatura: string,
    armi: { tipo: string, quantità: number }[],
    equipaggiamentoSpeciale: string[],
    capacitàDiTrasporto: number, //in m^3
    descrizione: string,
}
export interface UnitGroupType extends WithPermission {
    nome: string,
    fazione: string,
    forza?: number,
    dimensioni: {
        dimensioniElementi?: number,
        dimensioniUnità: DimensioniUnita,
    },
    unitaContenute?: { tipo: string, quantità: number }[], //Nomi unità contenute e numero
    tipo: string,
    descrizione: string,
}

export interface Map {
    nome: string,
}

export interface MapOverlay {
    nomeMap: string,
    nome: string,
    imageFilename: string,
    floor: number,
}

export type TipoStanza = {
    colore: string;
    nome: string;
}

export type Ship = {
    nome: string;
    piantaFilename: string;
    armi: {idArma: string, quantità: number}[];
    oggetti: {nome: string, quantità: number}[];
}

// Full API data

export type AllData = {
    armi: Arma[];
    armature: Armatura[];
    cronologia: Giorno[];
    fazioni: Fazione[];
    personaggi: Personaggio[];
    professions: ProfessionPlace[];
    unita: MilitaryUnitType[];
    navi: Ship[];
    maps: Map[];
    mapOverlays: MapOverlay[];
}
