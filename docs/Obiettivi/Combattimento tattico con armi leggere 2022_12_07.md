## Legame tra il regolamento e il calcolatore

Il calcolatore è un tool necessario al fine di ottimizzare i tempi di calcolo della probabilità di colpire e migliorare l'esperienza di gioco. I calcoli che vengono fatti all'interno del calcolatore sono derivati dal regolamento e non fanno altro che applicarlo.

Per questo motivo sarebbe prima necessario avere un regolamento completamente definito, chiaro e funzionante, ma non è così.
Il regolamento attuale sul combattimento tattico non è sviluppato a sufficienza per il combattimento standard, oltre a non includere quegli ambienti di gioco che si hanno in ambientazione spaziale: il combattimento in vuoto, a bassa gravità e in microgravità.
Non si parla solo della variazione delle regole per la probabilità di colpire, ma anche di copertura e movimento.

<p>&nbsp;</p>

## Regolamento

Il lavoro che prima di tutto bisognerebbe compiere è quindi quello di completare il regolamento.
Gli elementi più critici che ho trovato sono:

1. Copertura dinamica
	- Definire quando si è in copertura
	- Definire l'eventuale possibilità di distruggere la copertura
2. Definire un ambiente di gioco tridimensionale
	- Funzionamento tridimensionale della copertura anche funzione dell'altezza
	- Caratterizzazione di una tassellatura cubica
	- Movimento tridimensionale in microgravità
		- Balzi
		- Propulsori della tuta
		- Imprecisione dovuta al fuoco mentre in volo o fluttuanti
			- Il malus è ridotto dal punteggio abilità precisione
	- Capacità di movimento verticale in bassa gravità in funzione di
		- Gravità
		- Eventualmente punteggio abilità "gravità muscolare" (da decidere, secondo Ooch avrebbe senso farla valere nel balzo)
3. Cura e vita (da rifinire)
	- Definire il processo e l'efficienza della cura in funzione di
		- Chi effettua la cura
		- Strumenti utilizzati per la cura
		- Gravità della ferita
	- Definire il funzionamento della riduzione dei danni in funzione di:
		- Ossatura
		- Armatura
4. Modifiche ad armi e armature
	- Bisogna includere modifiche ad armi e armature nei calcoli di probabilità di colpire, riduzione dei danni, funzionalità e vulnerabilità (dell'armatura)
5. Ingombro
	- Definire un ingombro caratteristico degli oggetti (da decidere, eventuale)
	- Definire il numero massimo di armi trasportabili

<p>&nbsp;</p>

## Calcolatore

Gli obiettivi del calcolatore sono quelli di ridurre il tempo di calcolo e facilitare la comprensione del campo di battaglia
Il calcolatore per il combattimento tattico con armi leggere è per ora limitato al calcolo della probabilità per colpire. Tuttavia sarebbe utile utilizzarlo anche per caratterizzare i danni con le relative riduzioni o i relativi aggravi.

Un'ulteriore obiettivo dovrebbe essere velocizzare l'inserimento dei dati di armi, armature e personaggi, eventualmente estendendo il ragionamento a un modello integrato capace anche di generare direttamente il file obsidian in modo da non dover effettuare operazioni di copia incolla.

Riassumo quindi per punti il miglioramento delle funzioni, l'estensione delle funzioni e l'estensione degli obiettivi per questo calcolatore

1. Miglioramento delle funzioni del calcolatore: probabilità di colpire
	- Il calcolatore deve essere capace di mostrare come risultato non solo la probabilità di colpire alla distanza immessa, ma tutte le probabilità di colpire al variare della distanza da 1 a 30 (il driver è la riduzione ulteriore del tempo di calcolo dato che spesso è necessario rifare il calcolo quando è cambiata solo la distanza tra unità attiva e bersaglio)
	- Permettere di reinserire i dati di input precedenti con un solo click, salvandoli come una specie di log a destra dell'interfaccia.
2. Estensione delle funzioni del calcolatore: calcolo dei danni
	- Dati tipo di danno, numero e tipologia dei dadi, ossatura e corazza del bersaglio, il calcolatore deve saper calcolare i danni inflitti in funzione del valore risultante dei dadi, restituendo quindi una scala di valori, uno per ogni possibile risultato dalla somma dei dadi.
	- Dati tipo di danno, numero e tipologia dei dadi, ossatura e corazza del bersaglio, il calcolatore deve saper calcolare il danno medio inflitto.
3. Estensione degli obiettivi del calcolatore: inserimento dei dati e formato sorgente
	- Il formato dei file armi, armature, personaggi deve essere tale da permettere la creazione di un file Obsidian, utilizzando il file js come sorgente
	- Un nuovo programma deve essere in grado di creare un file Obsidian sulla base del formato sorgente, dati in input i file sorgente (armi, armature, personaggi), il tipo di file da generare (arma, armatura, personaggio) e il nome della voce all'interno del file sorgente dal quale leggere le informazioni.