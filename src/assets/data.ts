const ValoriCopertura = {
    "alta": -15,
    "nessuna": 0,
    "leggera": +25,
    "pesante": +50,
}
const Armi = [
    {
        "nome": "Martian Marine Corps Handgun 2a generazione, variante B",
        "codice": "MMCHG2B",
        "tipo": "Pistola (1 mano)",
        "danno": "1d6",
        "tipoDanno": "perforante",
        "gravitaDanno": "leggero",
        "probabilita": [80, 80, 75, 65, 60, 55, 50, 45, 40, 40, 36, 32, 28, 24, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5]
    },
    {
        "nome": "Starsmith Personal Version 5",
        "codice": "SSP5",
        "tipo": "Pistola (1 mano)",
        "danno": "1d6",
        "tipoDanno": "perforante",
        "gravitaDanno": "leggero",
        "probabilita": [78, 74, 70, 66, 62, 58, 54, 50, 47, 44, 41, 38, 35, 31, 28, 26, 24, 22, 20, 18, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7]

    },
    {
        "nome": "Catecam A2",
        "codice": "CA2",
        "tipo": "Pistola (1 mano)",
        "danno": "1d4+1d6",
        "tipoDanno": "perforante",
        "gravitaDanno": "leggero",
        "probabilita": [82, 81, 80, 78, 75, 71, 66, 60, 53, 45, 36, 28, 21, 15, 10, 6, 3, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    {
        "nome": "Rayman 9 Foldable",
        "codice": "R9F",
        "tipo": "SMG (2 mani)",
        "danno": "1d6",
        "tipoDanno": "perforante",
        "gravitaDanno": "leggero",
        "probabilita": [90, 88, 84, 80, 70, 60, 50, 45, 35, 25, 20, 15, 12, 9, 8, 7, 6, 5, 4, 3, 3, 3, 3, 3, 3, 2, 2, 2, 1, 1]
    },
    {
        "nome": "Safeshot Rapid 2300",
        "codice": "SR2300",
        "tipo": "SMG (2 mani)",
        "danno": "1d6",
        "tipoDanno": "perforante",
        "gravitaDanno": "leggero",
        "probabilita": [88, 86, 83, 80, 75, 70, 60, 52, 46, 37, 28, 20, 12, 10, 8, 7, 6, 5, 4, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2]
    },
    {
        "nome": "Station Keeping Light",
        "codice": "SKL",
        "tipo": "SMG (2 mani)",
        "danno": "1d6",
        "tipoDanno": "perforante",
        "gravitaDanno": "leggero",
        "probabilita": [90, 90, 85, 75, 65, 55, 45, 40, 30, 20, 20, 15, 12, 9, 8, 7, 6, 5, 4, 3, 3, 3, 3, 3, 3, 2, 2, 2, 1, 1]
    },
    {
        "nome": "Roar 25 Assault Configuration",
        "codice": "R25A",
        "tipo": "Fucile d'assalto (2 mani)",
        "danno": "1d8",
        "tipoDanno": "perforante",
        "gravitaDanno": "leggero",
        "probabilita": [82, 83, 83, 82, 81, 80, 78, 76, 74, 70, 65, 60, 55, 50, 45, 40, 36, 32, 28, 26, 24, 22, 20, 19, 18, 17, 16, 15, 14, 13]
    },
    {
        "nome": "Hoi12",
        "codice": "H12",
        "tipo": "Fucile d'assalto (2 mani)",
        "danno": "1d8",
        "tipoDanno": "perforante",
        "gravitaDanno": "leggero",
        "probabilita": [82, 85, 85, 85, 84, 83, 75, 67, 66, 60, 55, 50, 45, 40, 35, 30, 26, 22, 18, 17, 16, 15, 14, 13, 12, 11, 10, 10, 10, 10]
    },
    {
        "nome": "Void 1 Scatterfree",
        "codice": "V1S",
        "tipo": "Fucile d'assalto (2 mani)",
        "danno": "1d8",
        "tipoDanno": "perforante",
        "gravitaDanno": "leggero",
        "probabilita": [70, 80, 80, 80, 80, 80, 80, 80, 80, 78, 75, 71, 66, 60, 55, 50, 46, 42, 38, 34, 30, 26, 22, 20, 18, 16, 14, 12, 10, 10]
    },
    {
        "nome": "Lionheart 250",
        "codice": "LH250",
        "tipo": "Fucile (2 mani)",
        "danno": "1d8",
        "tipoDanno": "perforante",
        "gravitaDanno": "leggero",
        "probabilita": [60, 75, 85, 88, 85, 85, 85, 85, 85, 82, 82, 80, 75, 75, 70, 70, 65, 65, 60, 55, 50, 45, 40, 37, 34, 31, 28, 25, 22, 19]
    },
    {
        "nome": "Void Combat Laser 2a versione",
        "codice": "VCL2",
        "tipo": "Fucile (2 mani)",
        "danno": "1d10",
        "tipoDanno": "ustione",
        "gravitaDanno": "leggero",
        "probabilita": [50, 70, 71, 72, 73, 74, 75, 75, 75, 75, 75, 75, 75, 74, 73, 72, 71, 70, 65, 60, 55, 52, 49, 45, 40, 40, 40, 40, 40, 40]
    },
    {
        "nome": "Ratte 52 Antimateriale",
        "codice": "R52A",
        "tipo": "Fucile (2 mani)",
        "danno": "1d10",
        "tipoDanno": "perforante",
        "gravitaDanno": "leggero",
        "probabilita": [30, 30, 30, 70, 75, 85, 85, 85, 85, 80, 80, 80, 80, 70, 70, 70, 60, 60, 60, 60, 50, 50, 40, 40, 40, 40, 40, 40, 40, 40]
    },
    {
        "nome": "Ratte 52 Antimateriale esplosivo",
        "codice": "R52AE",
        "tipo": "Fucile (2 mani)",
        "danno": "1d6",
        "tipoDanno": "esplosivo",
        "gravitaDanno": "pesante",
        "probabilita": [30, 30, 30, 70, 75, 85, 85, 85, 85, 80, 80, 80, 80, 70, 70, 70, 60, 60, 60, 60, 50, 50, 40, 40, 40, 40, 40, 40, 40, 40]
    },
    {
        "nome": "Pistola Elettrica Starsmith",
        "codice": "SSPE",
        "tipo": "Pistola (1 mano)",
        "danno": "1d4",
        "tipoDanno": "elettrico, paralizzante",
        "gravitaDanno": "leggero",
        "probabilita": [78, 74, 70, 66, 62, 58, 54, 50, 47, 44, 41, 38, 35, 31, 28, 26, 24, 22, 20, 18, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7]
    },
    {
        "nome": "Fucile a Espansione Python",
        "codice": "PER",
        "tipo": "Fucile con serbatoio (2 mani)",
        "danno": "-",
        "tipoDanno": "intrappolante, espansione",
        "gravitaDanno": "leggero",
        "probabilita": [90, 90, 85, 80, 75, 70, 60, 50, 40, 30, 20, 10, 5, 5, 5, 5, 4, 4, 4, 3, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1]
    },
    {
        "nome": "Lenovatimen Direct Strike 7",
        "codice": "LDS7",
        "tipo": "Fucile a pallettoni (2 mani)",
        "danno": "1d6+1d8",
        "tipoDanno": "perforante",
        "gravitaDanno": "leggero",
        "probabilita": [96, 92, 88, 80, 70, 60, 50, 40, 30, 20, 15, 14, 13, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 1, 1, 1, 1, 1]
    },
    {
        "nome": "Rogun 100 rpm",
        "codice": "RG100RPM",
        "tipo": "Mitragliatrice leggera (2 mani)",
        "danno": "2d10",
        "tipoDanno": "perforante",
        "gravitaDanno": "leggero",
        "probabilita": [20, 40, 60, 80, 95, 95, 95, 90, 85, 80, 75, 70, 68, 66, 64, 62, 60, 56, 52, 48, 44, 40, 37, 34, 31, 28, 25, 22, 19, 16]
    },
    {
        "nome": "Order Microwave Crowd Controller",
        "codice": "OMCC",
        "tipo": "Arma pesante fissa",
        "danno": "1d4",
        "tipoDanno": "microonde",
        "gravitaDanno": "leggero",
        "probabilita": [97, 96, 94, 91, 87, 82, 76, 72, 62, 56, 53, 48, 42, 37, 31, 25, 19, 13, 7, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        "nome": "Vulcan fragmentation granade version 2",
        "codice": "VFGV2",
        "tipo": "Esplosivo lanciabile (leggero)",
        "danno": "1d8",
        "tipoDanno": "perforante",
        "gravitaDanno": "leggero",
        "probabilita": [98, 85, 60, 40, 20, 10, 8, 7, 6, 5, 4, 3, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        "nome": "Lightops Gadget 3",
        "codice": "LG3",
        "tipo": "Accecante lanciabile (leggero)",
        "danno": "-",
        "tipoDanno": "accecante",
        "gravitaDanno": "leggero",
        "probabilita": [98, 85, 60, 40, 20, 10, 8, 7, 6, 5, 4, 3, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },

    {
        "nome": "Lenovatimen Direct Strike 7",
        "codice": "LDS7",
        "tipo": "Fucile a pallettoni (2 mani)",
        "danno": "1d6 + 1d8",
        "tipoDanno": "perforante",
        "gravitaDanno": "leggero",
        "probabilita": [96, 92, 88, 80, 70, 60, 50, 40, 30, 20, 15, 14, 13, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 1, 1, 1, 1, 1]
    },
    {
        "nome": "Coetnat ASCI",
        "codice": "CTNTASCI",
        "tipo": "Fucile (2 mani)",
        "danno": "2d8",
        "tipoDanno": "perforante",
        "gravitaDanno": "leggero",
        "probabilita": [70, 75, 85, 85, 84, 83, 82, 81, 80, 79, 77, 75, 73, 71, 70, 68, 65, 65, 60, 55, 50, 45, 40, 37, 34, 31, 28, 25, 22, 20]
    },
    {
        "nome": "Coetnat AECM",
        "codice": "CTNTAECM",
        "tipo": "Mitraglietta (2 mani)",
        "danno": "2d6",
        "tipoDanno": "perforante",
        "gravitaDanno": "leggero",
        "probabilita": [88, 88, 84, 80, 70, 60, 50, 45, 35, 25, 20, 14, 10, 8, 7, 6, 5, 4, 3, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1]
    },
    {
        "nome": "",
        "codice": "",
        "tipo": "",
        "danno": "",
        "tipoDanno": "",
        "gravitaDanno": "leggero",
        "probabilita": []
    },
]

interface Personaggio {
    nome: string,
    nomeCompleto: string,
    armatura: string,
    competenzaAttacco: number,
    competenzaDifesa: number,
    armi: string[]
}

const Personaggi: Personaggio[] = [
    {
        nome: "Aaron",
        nomeCompleto: "Aaron Dack",
        armatura: "MCRNSTD",
        competenzaAttacco: 1,
        competenzaDifesa: 1,
        armi: ["H12", "V1S"]
    },
    {
        nome: "Jason",
        nomeCompleto: "Jason Armstrong",
        armatura: "MCRNSTD",
        competenzaAttacco: 2,
        competenzaDifesa: 3,
        armi: ["VCL2"]
    },
    {
        nome: "Mikey",
        nomeCompleto: "Mikey Mushimura",
        armatura: "MCRAGPA",
        competenzaAttacco: 1,
        competenzaDifesa: 2,
        armi: ["VCL2"]
    },
    {
        nome: "Rosa",
        nomeCompleto: "Rosa Memei",
        armatura: "MCRNSTD",
        competenzaAttacco: 2,
        competenzaDifesa: 2,
        armi: ["VCL2"]
    },
    {
        nome: "Valanga",
        nomeCompleto: "Valanga 'Lare' Senigagliesi",
        armatura: "MCRNSTD",
        competenzaAttacco: 3,
        competenzaDifesa: 2,
        armi: ["VCL2"]
    },
    {
        nome: "Iacot",
        nomeCompleto: "Iacot Katinsky",
        armatura: "MCRAGPA",
        competenzaAttacco: 2,
        competenzaDifesa: 2,
        armi: ["R52A", "V1S"]
    },
    {
        nome: "Sciacallo",
        nomeCompleto: "Shacallo di Merda",
        armatura: "Nessuna",
        competenzaAttacco: 0,
        competenzaDifesa: 0,
        armi: ["SKL"]
    },
    {
        nome: "Soldato",
        nomeCompleto: "Soldato della MRCN",
        armatura: "MCRNSTD",
        competenzaAttacco: 2,
        competenzaDifesa: 2,
        armi: ["MMCHG2B", "V1S"]
    },
    {
        nome: "Muzan",
        nomeCompleto: "Muzan",
        armatura: "MCRNSTD",
        competenzaAttacco: 2,
        competenzaDifesa: 2,
        armi: ["VCL2"]
    },
    {
        nome: "Stolthet",
        nomeCompleto: "Stolthet",
        armatura: "MCRNSTD",
        competenzaAttacco: 2,
        competenzaDifesa: 2,
        armi: ["R52A"]
    },
    {
        nome: "DuskTF",
        nomeCompleto: "Task Force Duskiane",
        armatura: "LHGA",
        competenzaAttacco: 3,
        competenzaDifesa: 2,
        armi: ["CTNTASCI"]
    },
    {
        nome: "DuskTF Micro",
        nomeCompleto: "Task Force Duskiane Micro Force",
        armatura: "LMA",
        competenzaAttacco: 2,
        competenzaDifesa: 2,
        armi: ["CTNTAECM"]
    },
]
const Armature = [
    {
        "nome": "Pelle",
        "codice": "Nessuna",
        "tipoCorazza": "N/A",
        "gravitaDanno": {
            "leggero": {
                "taglio": [0, 0],
                "perforante": [0, 0],
                "impatto": [0, 0],
                "elettrico": [0, 0],
                "ustione": [0, 0],
            },
            "pesante": {
                "taglio": [0, 0],
                "perforante": [0, 0],
                "impatto": [0, 0],
                "elettrico": [0, 0],
                "ustione": [0, 0],
            }
        }
    },
    {
        "nome": "Corazza standard della MCRN",
        "codice": "MCRNSTD",
        "tipoCorazza": "EVA suit",
        "gravitaDanno": {
            "leggero": {
                "taglio": [10, 0],
                "perforante": [20, 10],
                "impatto": [30, 15],
                "elettrico": [0, 0],
                "ustione": [0, 10],
            },
            "pesante": {
                "taglio": [0, 0],
                "perforante": [0, 0],
                "impatto": [0, 0],
                "elettrico": [0, 0],
                "ustione": [0, 0],
            }
        }
    },
    {
        "nome": "Goliath Powered Armor",
        "codice": "MCRAGPA",
        "tipoCorazza": "EVA suit",
        "gravitaDanno": {
            "leggero": {
                "taglio": [96, 0],
                "perforante": [96, 0],
                "impatto": [94, 30],
                "elettrico": [80, 0],
                "ustione": [20, 10],
            },
            "pesante": {
                "taglio": [0, 0],
                "perforante": [20, 0],
                "impatto": [30, 10],
                "elettrico": [0, 0],
                "ustione": [0, 0],
            }
        }
    },
    {
        "nome": "Lenovatimen High-g Armor",
        "codice": "LHGA",
        "tipoCorazza": "Powered armor (armatura media)",
        "gravitaDanno": {
            "leggero": {
                "taglio": [80, 20],
                "perforante": [80, 20],
                "impatto": [75, 25],
                "elettrico": [60, 5],
                "ustione": [60, 13],
            },
            "pesante": {
                "taglio": [0, 0],
                "perforante": [15, 0],
                "impatto": [20, 0],
                "elettrico": [0, 0],
                "ustione": [10, 0],
            }
        }
    },
    {
        "nome": "Corazza Lenovatimen Micro",
        "codice": "LMA",
        "tipoCorazza": "EVA suit (micro-armatura media)",
        "gravitaDanno": {
            "leggero": {
                "taglio": [5, 0],
                "perforante": [10, 0],
                "impatto": [15, 0],
                "elettrico": [0, 0],
                "ustione": [0, 0],
            },
            "pesante": {
                "taglio": [0, 0],
                "perforante": [0, 0],
                "impatto": [0, 0],
                "elettrico": [0, 0],
                "ustione": [0, 0],
            }
        }
    }
]

export {ValoriCopertura, Armi, Personaggi, Armature}
export type {Personaggio}