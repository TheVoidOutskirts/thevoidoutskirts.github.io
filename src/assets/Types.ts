// Last synced with enigma-data: 2022/08/09

// Arma

type TipoDanno = 'taglio' | 'perforante' | 'impatto' | 'elettrico' | 'ustione' | 'radiazione';
type GravitaDanno = 'leggero' | 'pesante';

type DimensioniUnita = 'gruppo di fuoco' | 'squadra' | 'pattuglia' | 'plotone' | 'compagnia' | 'battaglione' | 'reggimento' | 'brigata' | 'divisione' | 'corpo d\'armata' | 'armata' | 'gruppo d\'armate';
type QualitaSensori = 'eccezionali' | 'molto buoni' | 'buoni' | 'medi' | 'scarsi';
type QualitaAddestramento = 'nessun addestramento' | 'addestramento all\'arma' | 'addestramento regolare' | 'addestramento d\'assalto' | 'addestramento d\'elite';
type TipoAddestramento = 'abbordaggio' |'guarnigione' |'planetario' |'infiltrazione' |'ricognizione' |'assalto con droni' |'oltre la linea del fronte' |'organizzazione della difesa';
type TipoSensori = | 'sensori infrarossi'| 'rilevatori di movimento'| 'sensori luce visibile'| 'radiometro'| 'radar';
type QualitaCriptaggio = 'eccezionale' | 'molto buono' | 'buono' | 'medio' | 'scarso' | 'nessun criptaggio';
type MezzoComunicazione = 'luce visibile' | 'laser' | 'suono' | 'manovre o gesti' | 'radio morse' | 'radio voice' | 'radio data link';
type AttrezzaturaUnita = 'stivali magnetici' | 'guanti magnetici' | 'tuta EVA' | 'cavi di sicurezza' | 'propulsori' | 'motore Epstein';
type QualitaOccultamento = 'eccezionale' | 'molto buono' | 'buono' | 'medio' | 'scarso';
type TipoOccultamento = 'tecnologia stealth' | 'riflettori' | 'riduzione traccia radar';
type QualitaVelocita = 'molto veloce' | 'veloce' | 'media' | 'lenta' | 'molto lenta';

type Permission = string[] | "*" | ["exclude", string[]]

interface WithPermission {
    permission?: Permission
}

interface Arma extends WithPermission {
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

type Armi = Arma[]

// Cronologia

interface Evento extends WithPermission {
    who: string[] | "scenario",
    what: string
}

interface Giorno extends WithPermission {
    when: { year: number, month: number, day: number },
    events: Evento[],
}

type Cronologia = Giorno[]

// Personaggio

type Azione = 'arma' | 'presa' | 'spinta' | 'divincolarsi' | 'distrarre' | 'comunicare';

interface Personaggio extends WithPermission {
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

type Personaggi = Personaggio[]

// Armatura

interface Armatura extends WithPermission {
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

type Armature = Armatura[]

// Modifiche

interface Modifica extends WithPermission {
    nome: string;
    codice: string;
    modifica: unknown;
}

type Modifiche = Modifica[]

// SkillTrees

interface Profession extends WithPermission {
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

interface ProfessionPlace {
    place: string,
    professions: Profession[]
}

interface Skill {
    name: string,
    description: string,
    unlocked?: string[],
}

interface MilitaryUnitType extends WithPermission {
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
    armi: {
        TipoArma: string[],
        quantità: number[],
    },
    equipaggiamentoSpeciale: string[],
    capacitàDiTrasporto: number, //in m^3
    descrizione: string,
}

// Full API data

type AllData = {
    armi: Arma[];
    armature: Armatura[];
    cronologia: Giorno[];
    personaggi: Personaggio[];
    professions: ProfessionPlace[];
}
export type
   { TipoDanno
   , GravitaDanno
   , DimensioniUnita
   , QualitaSensori
   , QualitaAddestramento
   , TipoAddestramento
   , TipoSensori
   , QualitaCriptaggio
   , MezzoComunicazione
   , AttrezzaturaUnita
   , QualitaOccultamento
   , TipoOccultamento
   , QualitaVelocita
   , Permission
   , WithPermission
   , Arma
   , Armi
   , Evento
   , Giorno
   , Cronologia
   , Azione
   , Personaggio
   , Personaggi
   , Armatura
   , Armature
   , Modifiche
   , Profession
   , ProfessionPlace
   , Skill
   , MilitaryUnitType
   , AllData
   }
