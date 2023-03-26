# Header sito

L'header del sito riporta in modo gerarchico le pagine del sito. Per questo propongo 2 strategie, ma sono aperto ad altre proposte

## Strategia 1 Questa no

Header con link alle pagine principali a rappresentare le macroaree

- Homepage
- Combattimento
- Ambientazione
- Manuale (del giocatore) * ho messo tra parentesi del giocatore peché mi sembra troppo lungo da mettere nell'header
- Personaggio

Ogni elemento dell'header (H) permetterà di abbassare un menù a tendina (DD) per selezionare le altre pagine

- H: Homepage
- H: Combattimento
  - DD: Combattimento tattico
  - DD: Combattimento navale
  - DD: Combattimento strategico
- H: Ambientazione
  - DD: Luoghi
  - DD: Fazioni
  - DD: Mappe
- H: Manuale
- H: Personaggio
  - DD: Scheda del personaggio
  - DD: Squadra e organizzazione
  - DD: Cronologia

Le altre pagine:

- Combattimento tattico: CALCOLATORE
- Combattimento tattico: ARMI
- Combattimento tattico: TUTE
- Combattimento tattico: UNITÀ
- Combattimento navale: NAVI
- Combattimento navale: CALCOLATORE
- Combattimento strategico: UNITÀ e SIMBOLI
- Combattimento strategico: DOTTRINE
- Combattimento strategico: MAPPE
- Manuale del giocatore: STORIA
- Manuale del giocatore: INIZIARE LA PARTITA
- Manuale del giocatore: SALIRE DI LIVELLO
- Manuale del giocatore: INTERAZIONE CON IL MONDO DI GIOCO
- Combattimento tattico: REGOLAMENTO
- Combattimento navale: REGOLAMENTO
- Combattimento strategico: REGOLAMENTO

sarebbero accessibili solamente tramite link presenti all'interno della pagina gerarchicamente superiore


## Strategia 2 Facciamo questa qui

Header con link alle pagine principali a rappresentare le macroaree

- Homepage
- Combattimento
- Ambientazione
- Manuale (del giocatore) * ho messo tra parentesi del giocatore peché mi sembra troppo lungo da mettere nell'header
- Personaggio

Ogni elemento dell'header (H) permetterà di abbassare un menù a tendina (DD) per selezionare tutte le altre pagine, mantenendo un indentamento (DDI) per le pagine gerarchicamente sotto la DD precedente all'interno della tendina

- H: Homepage
- H: Combattimento
  - DD: Combattimento tattico
    - DDI: Combattimento tattico: CALCOLATORE
    - DDI: Combattimento tattico: ARMI
    - DDI: Combattimento tattico: TUTE
    - DDI: Combattimento tattico: UNITÀ
  - DD: Combattimento navale
    - DDI: Combattimento navale: NAVI
    - DDI: Combattimento navale: CALCOLATORE
  - DD: Combattimento strategico
    - DDI: Combattimento strategico: UNITÀ e SIMBOLI
    - DDI: Combattimento strategico: DOTTRINE
    - DDI: Combattimento strategico: MAPPE
- H: Ambientazione
  - DD: Luoghi
  - DD: Fazioni
  - DD: Mappe
- H: Manuale
  - DD: Manuale del giocatore: STORIA
  - DD: Manuale del giocatore: INIZIARE LA PARTITA
  - DD: Manuale del giocatore: SALIRE DI LIVELLO
  - DD: Manuale del giocatore: INTERAZIONE CON IL MONDO DI GIOCO
  - DD: Combattimento tattico: REGOLAMENTO
  - DD: Combattimento navale: REGOLAMENTO
  - DD: Combattimento strategico: REGOLAMENTO
- H: Personaggio
  - DD: Scheda del personaggio
  - DD: Squadra e organizzazione
  - DD: Cronologia