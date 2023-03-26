# Armatura

## Type armatura

```
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
```

## Front end armatura

La pagina è composta da 3 tab:

- Elenco
- Comparazione
- Dettagli

### Elenco

Tabella in cui ogni riga rappresenta una voce (quindi un'armatura).

La prima colonna è riservata a caselle di spunta per selezionare le armature da comparare.

Nell'header di gravità danno leggero, dividere la cella in 2 celle incolonnate. Successivamente dividere la cella inferiore in 6 celle in riga.
Fare lo stesso con l'header di gravità danno pesante. Fare lo stesso con l'header di vulnerabilità. In questo modo si otterrà un orientamento gerarchico del tipo:

- GRAVITÀ DANNO LEGGERO
  - TAGLIO
  - PERFORANTE
  - IMPATTO
  - ELETTRICO
  - USTIONE
  - RADIAZIONE
- GRAVITÀ DANNO PESANTE
  - TAGLIO
  - PERFORANTE
  - IMPATTO
  - ELETTRICO
  - USTIONE
  - RADIAZIONE
- VULNERABILITÀ
  - TAGLIO
  - PERFORANTE
  - IMPATTO
  - ELETTRICO
  - USTIONE
  - RADIAZIONE


Ogni casella di ogni voce di questi campi deve avere due numeri incolonnati.

Se uno dei campi è vuoto o inesistente, scrivere nella cella due "0" incolonnati.

I titoli delle altre colonne sono

- NOME ARMATURA
  - \<nome\>
- CODICE ARMATURA
  - \<codice\>
- TIPO ARMATURA
  - \<tipo\>
- PROBABILITÀ DI COLPIRE
  - \<probabilita\> sotto forma di istogramma numerato con la distanza sulle ascisse e la probabilità di colpire sulle ordinate
- CONO DI FUOCO
  - \<raggio\> oppure "Normale" se il campo non è presente
- GRAVITÀ DANNO LEGGERO
  - TAGLIO
    - \<gravitaDanno: {leggero: Record<taglio, [number, number]>\>
  - PERFORANTE
    - \<gravitaDanno: {leggero: Record<perforante, [number, number]>\>
  - IMPATTO
    - \<gravitaDanno: {leggero: Record<impatto, [number, number]>\>
  - ELETTRICO
    - \<gravitaDanno: {leggero: Record<elettrico, [number, number]>\>
  - USTIONE
    - \<gravitaDanno: {leggero: Record<ustione, [number, number]>\>
  - RADIAZIONE
    - \<gravitaDanno: {leggero: Record<radiazione, [number, number]>\>
- GRAVITÀ DANNO PESANTE
  - TAGLIO
    - \<gravitaDanno: {pesante: Record<taglio, [number, number]>\>
  - PERFORANTE
    - \<gravitaDanno: {pesante: Record<perforante, [number, number]>\>
  - IMPATTO
    - \<gravitaDanno: {pesante: Record<impatto, [number, number]>\>
  - ELETTRICO
    - \<gravitaDanno: {pesante: Record<elettrico, [number, number]>\>
  - USTIONE
    - \<gravitaDanno: {pesante: Record<ustione, [number, number]>\>
  - RADIAZIONE
    - \<gravitaDanno: {pesante: Record<radiazione, [number, number]>\>
- FUNZIONALITÀ
  - \<funzionalita\>
- VULNERABILITÀ
  - TAGLIO
    - \<Record<taglio, { [k: number]: string }>\>
  - PERFORANTE
    - \<Record<perforante, { [k: number]: string }>\>
  - IMPATTO
    - \<Record<impatto, { [k: number]: string }>\>
  - ELETTRICO
    - \<Record<elettrico, { [k: number]: string }>\>
  - USTIONE
    - \<Record<ustione, { [k: number]: string }>\>
  - RADIAZIONE
    - \<Record<radiazione, { [k: number]: string }>\>
- DANNO
  - \<danno\>
- DESCRIZIONE
  - \<descrizione\>

Le colonne ritenute troppo ingombranti durante lo sviluppo per una visualizzazione riga per riga saranno rimosse e quei dati saranno presenti solamente nella tab dei dettagli.


### Comparazione


Tabella in cui le righe sono i campi e le colonne sono le voci.  
La tabella ha un numero massimo **TBD** di voci.  
Sopra la tabella è presente una spunta con un testo "Mostra solo le differenze". Spuntando la casella nella tabella rimangono solo i campi in cui vi sono differenze tra le armature confrontate.  

Nel caso la casella non sia spuntata tutti i campi vengono mostrati

Nel caso il confronto si solamente tra due voci, i campi numerici cambiano colore se sono diversi: il colore verde va al valore più alto, il colore rosso va al valore più basso.

I campi numerici sono

- GRAVITÀ DANNO LEGGERO
  - TAGLIO
  - PERFORANTE
  - IMPATTO
  - ELETTRICO
  - USTIONE
  - RADIAZIONE
- GRAVITÀ DANNO PESANTE
  - TAGLIO
  - PERFORANTE
  - IMPATTO
  - ELETTRICO
  - USTIONE
  - RADIAZIONE
- VULNERABILITÀ
  - TAGLIO
  - PERFORANTE
  - IMPATTO
  - ELETTRICO
  - USTIONE
  - RADIAZIONE


### Dettagli

Nei dettagli sono proposti tutti i campi di un'armatura, disposti uno dopo l'altro con lo stesso ordine dei campi dell'elenco. Dovranno essere viualizzati tutti i campi (anche quelli che nell'elenco non sono presenti).







# Modifica


