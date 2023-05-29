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

La pagina è composta da 3 tab:

- Elenco
- Comparazione
- Dettagli

### Elenco

Tabella in cui ogni riga rappresenta una voce (quindi un'arma).

La prima colonna è riservata a caselle di spunta per selezionare le armi da comparare.

I titoli delle altre colonne sono

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

Le colonne ritenute troppo ingombranti durante lo sviluppo per una visualizzazione riga per riga saranno rimosse e quei dati saranno presenti solamente nella tab dei dettagli.


### Comparazione


Tabella in cui le righe sono i campi e le colonne sono le voci.  
La tabella ha un numero massimo **TBD** di voci. (potenzialmente si potrebbe permettere di aggiungere voci alla tabella, ma non è una priorità)  
Sopra la tabella è presente una spunta con un testo "Mostra solo le differenze". Spuntando la casella nella tabella rimangono solo i campi in cui vi sono differenze tra le armi confrontate.  

Nel caso la casella non sia spuntata tutti i campi vengono mostrati

Nel caso il confronto si solamente tra due voci, i campi numerici cambiano colore se sono diversi: il colore verde va al valore più alto, il colore rosso va al valore più basso.

La riga della probabilità di colpire ha una sola cella in cui i X istogrammi delle X voci sono sovrapposti. Nell'istogramma, ogni arma deve essere rappresentata da un colore diverso.

I campi numerici sono

- danno


### Dettagli

Nei dettagli sono proposti tutti i campi di un'arma, disposti uno dopo l'altro con lo stesso ordine dei campi dell'elenco. Dovranno essere viualizzati tutti i campi (anche quelli che nell'elenco non sono presenti).







# Modifica


