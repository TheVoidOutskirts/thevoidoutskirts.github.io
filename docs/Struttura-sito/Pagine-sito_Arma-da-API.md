# Arma

## Type arma

```
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
```

## Front end arma

Tabella in cui ogni riga rappresenta una voce (quindi un'arma).

I titoli delle colonne sono

- NOME ARMA
  - \<nome\>
- CODICE ARMA
  - \<codice\>
- TIPO ARMA
  - \<tipo\>
- PROBABILITÀ DI COLPIRE
  - \<probabilita\> sotto forma di istogramma numerato con la distanza sulle ascisse e la probabilità di colpire sulle ordinate
- CONO DI FUOCO
  - \<raggio\> oppure "Normale" se il campo non è presente
- GRAVITÀ DANNO
  - \<GravitaDanno\>
- TIPO DANNO
  - \<TipoDanno\>
- DANNO
  - \<danno\>
- EFFETTI SPECIALI
  - \<descrizione_danno\> oppure "Nessuno" se il campo non è presente
- DESCRIZIONE
  - \<descrizione\>
- MODIFICHE POSSIBILI
  - \<modifiche_poss\> oppure "Nessuna" se il campo è vuoto



# Modifica


