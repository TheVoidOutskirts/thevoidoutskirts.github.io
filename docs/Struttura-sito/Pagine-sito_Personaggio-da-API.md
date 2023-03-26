# Personaggio

## Type personaggio

```
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
```

