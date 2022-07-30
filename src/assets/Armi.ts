export {Armi}
export type {TipoDanno, GravitaDanno, Arma}

type TipoDanno = 'taglio' | 'perforante' | 'impatto' | 'elettrico' | 'ustione' | 'radiazione';
type GravitaDanno = 'leggero' | 'pesante';

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

const Armi: Arma[] = [
    {
        nome: "Lanciafiamme Ifrit",
        codice: "IF3",
        tipo: "Fucile con serbatoio (arma a due mani)",
        danno: [6, 6],
        tipoDanno: "ustione",
        gravitaDanno: "leggero",
        modifiche_poss: [],
        probabilita: [99, 98, 97, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        raggio: [
            [' ', 'U', ' '],
            [' ', 'C', ' '],
            ['C', 'C', 'C'],
            ['C', 'C', 'C'],
            [' ', 'C', ' '],
        ],
        descrizione: `Il lanciafiamme Ifrit è una soluzione pulita a qualsiasi minaccia organica all'interno della stazione.`,
        descrizione_danno: `Incendiario: dà fuoco a ciò che è infiammabile all'interno del raggio di azione.`,
    },
    {
        nome: "Martian Marine Corps Handgun 2a generazione, variante B",
        codice: "MMCHG2B",
        tipo: "Pistola (1 mano)",
        danno: [6],
        tipoDanno: "perforante",
        gravitaDanno: "leggero",
        modifiche_poss: ["HE"],
        probabilita: [80, 80, 75, 65, 60, 55, 50, 45, 40, 40, 36, 32, 28, 24, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5],
        descrizione: ``
    },
    {
        nome: "Starsmith Personal Version 5",
        codice: "SSP5",
        tipo: "Pistola (1 mano)",
        danno: [6],
        tipoDanno: "perforante",
        gravitaDanno: "leggero",
        modifiche_poss: ["HE"],
        probabilita: [78, 74, 70, 66, 62, 58, 54, 50, 47, 44, 41, 38, 35, 31, 28, 26, 24, 22, 20, 18, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7],
        descrizione: ``
    },
    {
        nome: "Catecam A2",
        codice: "CA2",
        tipo: "Pistola (1 mano)",
        danno: [4, 6],
        tipoDanno: "perforante",
        gravitaDanno: "leggero",
        modifiche_poss: ["HE"],
        probabilita: [82, 81, 80, 78, 75, 71, 66, 60, 53, 45, 36, 28, 21, 15, 10, 6, 3, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1],
        descrizione: ``
    },
    {
        nome: "Rayman 9 Foldable",
        codice: "R9F",
        tipo: "SMG (2 mani)",
        danno: [6],
        tipoDanno: "perforante",
        gravitaDanno: "leggero",
        modifiche_poss: ["HE"],
        probabilita: [90, 88, 84, 80, 70, 60, 50, 45, 35, 25, 20, 15, 12, 9, 8, 7, 6, 5, 4, 3, 3, 3, 3, 3, 3, 2, 2, 2, 1, 1],
        descrizione: ``
    },
    {
        nome: "Safeshot Rapid 2300",
        codice: "SR2300",
        tipo: "SMG (2 mani)",
        danno: [6],
        tipoDanno: "perforante",
        gravitaDanno: "leggero",
        modifiche_poss: ["HE"],
        probabilita: [88, 86, 83, 80, 75, 70, 60, 52, 46, 37, 28, 20, 12, 10, 8, 7, 6, 5, 4, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2],
        descrizione: ``
    },
    {
        nome: "Station Keeping Light",
        codice: "SKL",
        tipo: "SMG (2 mani)",
        danno: [6],
        tipoDanno: "perforante",
        gravitaDanno: "leggero",
        modifiche_poss: ["HE"],
        probabilita: [90, 90, 85, 75, 65, 55, 45, 40, 30, 20, 20, 15, 12, 9, 8, 7, 6, 5, 4, 3, 3, 3, 3, 3, 3, 2, 2, 2, 1, 1],
        descrizione: ``
    },
    {
        nome: "Roar 25 Assault Configuration",
        codice: "R25A",
        tipo: "Fucile d'assalto (2 mani)",
        danno: [8],
        tipoDanno: "perforante",
        gravitaDanno: "leggero",
        modifiche_poss: ["HE"],
        probabilita: [82, 83, 83, 82, 81, 80, 78, 76, 74, 70, 65, 60, 55, 50, 45, 40, 36, 32, 28, 26, 24, 22, 20, 19, 18, 17, 16, 15, 14, 13],
        descrizione: ``
    },
    {
        nome: "Hoi12",
        codice: "H12",
        tipo: "Fucile d'assalto (2 mani)",
        danno: [8, 8],
        tipoDanno: "perforante",
        gravitaDanno: "leggero",
        modifiche_poss: ["HE"],
        probabilita: [82, 85, 85, 85, 84, 83, 75, 67, 66, 60, 55, 50, 45, 40, 35, 30, 26, 22, 18, 17, 16, 15, 14, 13, 12, 11, 10, 10, 10, 10],
        descrizione: ``
    },
    {
        nome: "Void 1 Scatterfree",
        codice: "V1S",
        tipo: "Fucile d'assalto (2 mani)",
        danno: [8],
        tipoDanno: "perforante",
        gravitaDanno: "leggero",
        modifiche_poss: ["HE"],
        probabilita: [70, 80, 80, 80, 80, 80, 80, 80, 80, 78, 75, 71, 66, 60, 55, 50, 46, 42, 38, 34, 30, 26, 22, 20, 18, 16, 14, 12, 10, 10],
        descrizione: ``
    },
    {
        nome: "Lionheart 250",
        codice: "LH250",
        tipo: "Fucile (2 mani)",
        danno: [8],
        tipoDanno: "perforante",
        gravitaDanno: "leggero",
        modifiche_poss: ["HE"],
        probabilita: [60, 75, 85, 88, 85, 85, 85, 85, 85, 82, 82, 80, 75, 75, 70, 70, 65, 65, 60, 55, 50, 45, 40, 37, 34, 31, 28, 25, 22, 19],
        descrizione: ``
    },
    {
        nome: "Void Combat Laser 2a versione",
        codice: "VCL2",
        tipo: "Fucile (2 mani)",
        danno: [10],
        tipoDanno: "ustione",
        gravitaDanno: "leggero",
        modifiche_poss: ["HE"],
        probabilita: [50, 70, 71, 72, 73, 74, 75, 75, 75, 75, 75, 75, 75, 74, 73, 72, 71, 70, 65, 60, 55, 52, 49, 45, 40, 40, 40, 40, 40, 40],
        descrizione: ``
    },
    {
        nome: "Ratte 52 Antimateriale",
        codice: "R52A",
        tipo: "Fxucile (2 mani)",
        danno: [10],
        tipoDanno: "perforante",
        gravitaDanno: "leggero",
        modifiche_poss: ["HE"],
        probabilita: [30, 30, 30, 70, 75, 85, 85, 85, 85, 80, 80, 80, 80, 70, 70, 70, 60, 60, 60, 60, 50, 50, 40, 40, 40, 40, 40, 40, 40, 40],
        descrizione: `Fucile antimateriale capace di penetrare anche corazze più spesse delle tipiche tute spaziali da combattimento, come bersagli robotici o scafi. Il fucile supporta anche l'utilizzo di proiettili esplosivi.`
    },
    {
        nome: "Pistola Elettrica Starsmith",
        codice: "SSPE",
        tipo: "Pistola (1 mano)",
        danno: [4],
        tipoDanno: "elettrico",
        gravitaDanno: "leggero",
        modifiche_poss: ["HE"],
        probabilita: [78, 74, 70, 66, 62, 58, 54, 50, 47, 44, 41, 38, 35, 31, 28, 26, 24, 22, 20, 18, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7],
        descrizione: ``
    },
    {
        nome: "Fucile a Espansione Python",
        codice: "PER",
        tipo: "Fucile con serbatoio (2 mani)",
        danno: [],
        tipoDanno: "perforante",
        gravitaDanno: "leggero",
        modifiche_poss: ["HE"],
        probabilita: [90, 90, 85, 80, 75, 70, 60, 50, 40, 30, 20, 10, 5, 5, 5, 5, 4, 4, 4, 3, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1],
        descrizione: ``
    },
    {
        nome: "Lenovatimen Direct Strike 7",
        codice: "LDS7",
        tipo: "Fucile a pallettoni (2 mani)",
        danno: [6, 8],
        tipoDanno: "perforante",
        gravitaDanno: "leggero",
        modifiche_poss: ["HE"],
        probabilita: [96, 92, 88, 80, 70, 60, 50, 40, 30, 20, 15, 14, 13, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 1, 1, 1, 1, 1],
        descrizione: ``
    },
    {
        nome: "Rogun 100 rpm",
        codice: "RG100RPM",
        tipo: "Mitragliatrice leggera (2 mani)",
        danno: [10, 10],
        tipoDanno: "perforante",
        gravitaDanno: "leggero",
        modifiche_poss: ["HE"],
        probabilita: [20, 40, 60, 80, 95, 95, 95, 90, 85, 80, 75, 70, 68, 66, 64, 62, 60, 56, 52, 48, 44, 40, 37, 34, 31, 28, 25, 22, 19, 16],
        descrizione: ``
    },
    {
        nome: "Order Microwave Crowd Controller",
        codice: "OMCC",
        tipo: "Arma pesante fissa",
        danno: [4],
        tipoDanno: "radiazione",
        gravitaDanno: "leggero",
        modifiche_poss: ["HE"],
        probabilita: [97, 96, 94, 91, 87, 82, 76, 72, 62, 56, 53, 48, 42, 37, 31, 25, 19, 13, 7, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        descrizione: ``
    },
    {
        nome: "Vulcan fragmentation granade version 2",
        codice: "VFGV2",
        tipo: "Esplosivo lanciabile (leggero)",
        danno: [8],
        tipoDanno: "perforante",
        gravitaDanno: "leggero",
        modifiche_poss: ["HE"],
        probabilita: [98, 85, 60, 40, 20, 10, 8, 7, 6, 5, 4, 3, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        descrizione: ``
    },
    {
        nome: "Lightops Gadget 3",
        codice: "LG3",
        tipo: "Accecante lanciabile (leggero)",
        danno: [],
        // todo tipoDanno: "accecante",
        tipoDanno: "elettrico",
        gravitaDanno: "leggero",
        modifiche_poss: ["HE"],
        probabilita: [98, 85, 60, 40, 20, 10, 8, 7, 6, 5, 4, 3, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        descrizione: ``,
        descrizione_danno: ``
    },
    {
        nome: "Lenovatimen Direct Strike 7",
        codice: "LDS7",
        tipo: "Fucile a pallettoni (2 mani)",
        danno: [6, 8],
        tipoDanno: "perforante",
        gravitaDanno: "leggero",
        modifiche_poss: ["HE"],
        probabilita: [96, 92, 88, 80, 70, 60, 50, 40, 30, 20, 15, 14, 13, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 1, 1, 1, 1, 1],
        descrizione: ``
    },
    {
        nome: "Coetnat ASCI",
        codice: "CTNTASCI",
        tipo: "Fucile (2 mani)",
        danno: [8, 8],
        tipoDanno: "perforante",
        gravitaDanno: "leggero",
        modifiche_poss: ["HE"],
        probabilita: [70, 75, 85, 85, 84, 83, 82, 81, 80, 79, 77, 75, 73, 71, 70, 68, 65, 65, 60, 55, 50, 45, 40, 37, 34, 31, 28, 25, 22, 20],
        descrizione: ``
    },
    {
        nome: "Coetnat AECM",
        codice: "CTNTAECM",
        tipo: "Mitraglietta (2 mani)",
        danno: [6, 6],
        tipoDanno: "perforante",
        gravitaDanno: "leggero",
        modifiche_poss: ["HE"],
        probabilita: [88, 88, 84, 80, 70, 60, 50, 45, 35, 25, 20, 14, 10, 8, 7, 6, 5, 4, 3, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1],
        descrizione: ``
    },
    {
        nome: "Armor Melter",
        codice: "ASAME",
        tipo: "Tirapugni elettrico (arma a una mano)",
        danno: [6, 6],
        tipoDanno: "elettrico",
        gravitaDanno: "leggero",
        modifiche_poss: [],
        probabilita: [99, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        descrizione: `Un tirapugni le cui borchie sulle nocche sono contatti elettrici collegati a una batteria. Si tratta di un oggetto specializzato nel friggere i sistemi di corazze e tute potenziate.`
    },
]
