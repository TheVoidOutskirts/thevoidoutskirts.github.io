<script setup lang="ts">
import {onMounted} from "vue";

onMounted(() => {
  tryApplyMathJax()

  function tryApplyMathJax() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const mathJax = window.MathJax;
    if (mathJax !== undefined) {
      // https://stackoverflow.com/questions/45047126/how-to-add-external-js-scripts-to-vuejs-components
      mathJax.typeset()
    } else {
      console.warn("Mathjax not yet loaded... trying again")
      setTimeout(() => tryApplyMathJax(), 100)
    }
  }
})
</script>
<template>
  <main class="container" style="padding-top: 65px">
    <a class="btn btn-secondary btn-lg" id="bottoneSommario" data-bs-toggle="offcanvas" href="#offcanvasSommario"
       role="button">
      <i class="bi bi-list-nested"></i>
    </a>
    <h1 id="la-costruzione-delle-periferie-del-vuoto">La costruzione delle
      Periferie del Vuoto</h1>
    <h2 id="indice">Indice</h2>
    <h2 id="introduzione">Introduzione</h2>
    <p>La costruzione della stazione inizio nel 2458, per terminare nel
      2490. I covering della stazione (i diversi blocchi innestati sul
      portale) furono costruiti in collaborazione tra il Sistema Solare e
      Proxima Centauri, con la tecnologia delle due stelle. I covering furono
      poi suddivisi equamente tra le due stelle destinando a ognuna la faccia
      del portale ad essa rivolta.</p>
    <hr/>
    <p>
       
    </p>
    <h2 id="la-scoperta">La scoperta</h2>
    <p>I primi umani a scoprire il portale si trovavano in una missione di
      ritorno da Proxima Centauri, si trattava delle prime missioni di
      rifornimento interstellari. Con l’idea di sfruttare al meglio l’effetto
      fionda di Proxima Centauri, si trovarono a seguire una traiettoria più
      lunga della semplice traiettoria diretta. La scoperta avvenne nel
      2360.</p>
    <p>Erano a due terzi del viaggio quando i radar individuarono un grosso
      oggetto a poche centinaia di unità astronomiche di distanza. Il capitano
      della nave Leela Pradhan diede ordine di modificare la rotta per
      avvicinarsi all’oggetto. Finirono quasi il propellente, ma riuscirono a
      passare a meno di un milione di chilometri di distanza. Capirono che non
      si trattava di un asteroide, troppo piccolo, né di un buco nero, troppo
      poco massivo. Non avendo il propellente per fermarsi lasciarono ai
      posteri il compito di esplorare la scoperta del secolo.</p>
    <p>Dai registri della nave si ha traccia di alcuni momenti del periodo
      della scoperta.</p>
    <p>Un piccolo puntino sul radar è tutto quello che ci vuole per
      scatenare il panico in spazio interstellare. Lo schermo di allerta
      dell’operatore radar blippò qualche volta prima che l’operatore,
      stordito dagli anni di viaggio vuoti e sempre uguali, toccasse lo
      schermo. Il risveglio dal semitorpore non è mai bello, si assumono
      droghe per non sentire troppo il tempo che passa e qualsiasi input
      esterno porta al quasi svenimento. L’operatore si mise a sedere e guardò
      lo schermo con tutta la poca attenzione che poteva dedicarvi in quello
      stato. Mentre le luci della stanza incrementavano progressivamente la
      luminosità, le proprietà dell’oggetto comparivano sullo schermo. Nulla
      che fosse già stato visto. I dati non corrispondevano a nulla che
      potesse vagare nello spazio interstellare.</p>
    <p>L’operatore si alzo faticosamente in piedi mentre con una mano
      comandava lo schermo di inviare la rilevazione al capitano. Fece qualche
      metro zoppicando fino alla porta e poi con voce sostenuta esclamò:
      “Capitano!, sullo schermo, individuato oggetto non identificato di
      grandi dimensioni sulla rotta”.</p>
    <p>Il capitano si trovava in uno stato di meditazione quando fu
      interrotta. Lo schermo davanti a lei si illuminò e comparirono le stesse
      scritte prima poste all’occhio dell’operatore. Lo spazio interstellare
      era un oceano inesplorato, la prossima tappa dopo lo spazio
      interplanetario. Se le distanze nei pianeti esterni erano prive di
      senso, quelle dello spazio interstellare erano infinite. I concetti di
      vicinanza, lontananza, pozzo gravitazionale e pianeta di riferimento
      erano inutili. Eppure davanti a lei si registravano i dati di un oggetto
      dannatamente vicino e nuovo, abbastanza grande e abbastanza fortunato da
      essere percepito. Che quella fosse fortuna sarebbero stati i posteri a
      giudicarlo, ma il capitano pensò che forse le coincidenze non esistono e
      che quello poteva sì trattarsi di una cattiva misurazione, ma poteva
      anche non esserlo.</p>
    <p>La viaggiatrice si tirò su dal giaciglio e si fece un caffé e
      cominciò a pensare alle decisioni da farsi. Portava sulle spalle un
      fardello di 400 anime a bordo della sua nave, la Sitaaron Kee Aatma,
      quello che voleva fare era dare un’occhiata più da vicino all’oggetto,
      ma conosceva le complicazioni. Il propellente e il materiale di fissione
      erano limitati, ogni correzione alla rotta era un rischio aggiuntivo di
      mancare la decelerazione all’arrivo e non tornare mai. “Aatma,
      comunicazioni, tutte le stanze” comandò il capitano alla sua nave.</p>
    <p>Rou Caliban si stava facendo la doccia quando la voce del suo
      capitano si accese nitida dall’altoparlante del bagno. “Equipaggio”
      iniziò. “Da 68 anni, 9 mesi e 19 giorni siamo in viaggio verso il
      Sistema Solare, siamo tra le prime migliaia di persone della storia
      dell’umanità a vedere un’altra stella e a poter tornare indietro per
      raccontarlo. Già solo questo è un traguardo per il quale sono orgogliosa
      di vivere. Ma la nostra casa centenaria non è stata né l’una, né l’altra
      stella. Siete nati nel Sistema Solare ed è mio dovere e mia volonta
      riportarvici, tutti. Ma credo che dovremmo dare più valore a un viaggio
      centenario nel quale abbiamo più che altro dormito”. Chiusa l’acqua
      della doccia, Rou in piedi, con le braccia a penzoloni, ascoltava il
      messaggio. Era paralizzata e aveva i brividi. Brividi di orgoglio per le
      parole potenti del suo capitano e di terrore per quello che poteva
      venire dopo. Come lei, altre diciotto persone impietrite ascoltavano.
      Un’unica persona stava per decidere il destino di venti, che a loro
      volta avrebbero deciso il destino di tutti i quattrocento membri
      dell’equipaggio: svegli e dormienti. “Là fuori, a poche unità
      astronomiche da noi, c’è qualcosa che come noi abita lo spazio tra le
      stelle. Potrebbe trattarsi di un errore strumentale, ma io credo che sia
      invece qualcosa di nuovo, qualcosa di oscuro nel buio di questo
      viaggio”. Stava per arrivare. Una richiesta d’eroismo che avrebbe
      probabilmente ucciso tutti sulla nave. Il senso di colpa tagliò
      l’afflusso di sangue alle gambe di Rou che cadde seduta sul pavimento
      del bagno. Già percepiva peso di essere costretta a decidere per
      centinaia di persone. venti persone avrebbero dovuto scegliere per venti
      volte tante. Il capitano riprese: “Io voglio vedere di cosa si tratta,
      ma sono una persona sola e uno solo dei venti capitani di questa nave.
      Non si tratta di una situazione di emergenza, quindi non ho il diritto
      di decidere per voi, ne per coloro che dormono ignari di quello che
      esiste nel buio”. “Allora non chiedercelo” sussurrò Rou singhiozzando.
      “Voi, neanche voi avete il diritto di decidere per gli altri. Non potete
      decidere di mancare un’opportunità di scrivere la storia, di nuovo”.</p>
    <p>Dopo il silenzio di una decina di secondi, il capitano Leela Pradhan
      riprese decisa: “Svegliate tutti, voteremo per la prima volta in questa
      nave”.</p>
    <p>La nave era progettata per un equipaggio sveglio di circa cinquanta
      persone. Non era costruita per contenere le vite di quattrocento umani
      svegli, sarebbe stata in grado di supportarli solo per un breve periodo,
      quindi era necessario preparare tutto in modo adeguato per permettere
      alle persone di ascoltare, parlare, scambiarsi opinioni, votare e
      conoscere il loro destino nel minor tempo possibile. Avevano due mesi al
      massimo di provviste per quattrocento persone sveglie e un mese prima di
      perdere il nodo per la manovra di avvicinamento all’oggetto
      sconosciuto.</p>
    <p>Alan Sing era un comunicatore, un’ottimo parlatore e un maestro nel
      veicolare informazioni rapidamente e chiaramente. Si svegliò dal torpore
      con il capitano e il medico del turno sedici al capezzale. Le labbra e
      le guance intorpidite facevano fatica a muoversi, ma un parlatore come
      lui non poteva starsene zitto: “Ehi ehi, commemmai mifhegliate ora. Io
      efro nel turno cinque, vi siete sbagliati”. Il capitano Pradhan scosse
      la testa, “Non ci siamo sbagliati Alan, abbiamo bisogno di te”. Il
      cinturiano fu fatto alzare molto lentamente e gli furono somministrate
      le sostanze del risveglio. Ormai era fatta, ci sarebbe voluto un po’
      prima di potersi rimettere a letto. Sing odiava la sensazione di
      addormentarsi nel torpore e la sola idea di aver vinto
      un’addormentamento in più proprio per le sue abilità lo infastidiva
      moltissimo. Ciò nonostante preparò una presentazione impeccabile:
      l’introduzione, lo scopo, la manovra orbitale da compiere, lo scopo, i
      rischi, lo scopo e infine gli obiettivi. Alan voleva che lo scopo fosse
      chiaro. L’ultima cosa che desiderava era invece trovarsi fuori rotta per
      un motivo a caso e perché nessuno aveva capito nulla. Cinturiano di
      Ganimede, Sing odiava le votazioni in grande stile tipiche degli
      interni. Le trovava un modo per controllare le masse e per imporre il
      controllo della maggioranza. Sing odiava praticamente tutto della
      situazione in cui si trovava al momento: il risveglio, il motivo del
      risveglio, il lavoro e il voto che avrebbe dovuto dare. Eppure, proprio
      come il capitano del turno sedici, lo riteneva necessario.</p>
    <p>Turno sedici, Vali Hussain, tecnico-ingegnere idraulico. “Ecco la
      nostra acqua che finisce” mormorò tra sé e sé autorizzando l’accesso
      alle scorte dal suo palmare. Ora rimpiangeva tutte le docce lunghe, i
      cibi ad alto costo idrico e il ghiaccio negli alcolici. Rimpiangeva e si
      pentiva di tutta la sacra acqua che aveva consumato nei tre anni attivi
      del suo turno. Con gli occhi lucidi si recò a supervisionare le tubature
      in uscita dai serbatoi. Quell’acqua si stava lentamente trasformando in
      liquido da iniettare ai membri dormienti dell’equipaggio per idratarli.
      Presto ci sarebbe stata una nave piena zeppa di gente affamata e
      assetata e un viaggio tranquillo si sarebbe tramutato in una penuria di
      risorse.</p>
    <p>Il capitano Fulvio Aerts si alzò dal torpore rapidamente, come si
      richiede a un capitano. Con la mandibola addormentata e gli occhi pieni
      di lucine si mise a sedere e si strinse subito gli stivali costrittivi
      muovendo a vista le mani ancora insensibili. Raggiunse il pavimento con
      un saltino a bassa gravità e si guardò intorno. Il suo turno dormiva
      ancora, ma il capitano notò subito la procedura di risveglio di
      emergenza sugli schermi degli autodock dei suoi colleghi. Era
      leggermente ritardata rispetto alla sua e avrebbe avuto qualche ora per
      svegliarsi prima di assistere i membri del suo turno durante il
      risveglio.</p>
    <p>Mentre questa situazione si replicava per altre diciotto volte in
      altre diciotto stanze, Alan Sing inviava la presentazione su tutti gli
      schermi della nave.</p>
    <p>Ci fu chi non capì la portata della scoperta. Chi non la sospettò
      neppure. Ci furono persone che cercarono di ritardare le elezioni per
      mancare il nodo di manovra e forzare il ritorno a casa. Ci furono membri
      dell’equipaggio che si rifiutarono di alzarsi. Una settimana e mezza
      dopo arrivò il giorno della votazione. Molto semplicemente si poteva
      votare di modificare la rotta per avvicianrsi all’oggetto sconosciuto
      oppure votare contro questa soluzione. Ci si poteva anche astenere
      naturalmente. Moltissime persone ebbero crisi psicolgiche, forse era una
      cosa normale dopo più di cento anni passati lontano da casa, ma la
      normalità non esiste quando si è i primi.</p>
    <p>Leela Pradhan aveva il suo risultato. 240 a favore, 92 contrari.
      “L’uomo da sempre insegue l’ignoto” pensò. “Perché ora dovrebbe fare
      diversamente”.</p>
    <p>Furono fermati i cilindri di rotazione per la gravità artificiale, la
      nave si dispose di traverso rispetto alla traiettoria e spinse alcuni
      megagrammi di propellente a centinaia di chilometri al secondo nello
      spazio profondo. Qualche mese più tardi la l’astronave sfrecciò
      vicinissima all’oggetto.</p>
    <p>Il capitano Pradhan osservava le immagini dalla camera anteriore.
      “Per lo spazio”. Mormorii soddisfatti e preoccupati invasero il ponte di
      comando. La nave era di nuovo silenziosa ora che tutti dormivano di
      nuovo. Sul ponte però c’era tutto il turno sedici. Tutti a guardare quel
      disco nero bloccare la luce delle stelle. “Sarà davvero materia oscura?”
      “Smettila, quella teoria è superata” “Forse è uno di quei buchi killer
      spaziotemporali”. “Non credo, troppo piccolo” disse il capitano,
      “Dovranno indagare. Ma non noi, noi abbiamo fatto il nostro lavoro. Tra
      cinquanta o cento anni, quando noi saremo morti, forse qualcuno saprà
      cos’è questo oggetto, ma noi moriremo sapendo di essere stati i primi a
      vederlo”.</p>
    <p>Il capitano Leela Pradhan non comandò la frenatura e l’inserimento
      nell’orbita solare, fu il capitano del ventesimo turno che assolse ai
      suoi obblighi perfettamente e riportò tutti a casa. Leela Pradhan morì
      nel 2414, oltre quarant’anni prima dell’inizio della costruzione della
      stazione, portandosi dietro il ricordo di essere stata la prima a vedere
      un disco nero su uno schermo. Nessun membro della Sitaaron Kee Aatma
      visse così a lungo da vedere la stazione.</p>
    <p>Nello spazio profondo le distanze sono così grandi che il concetto
      stesso del tempo perde ogni significato.</p>
    <hr/>
    <p>
       
    </p>
    <h2 id="lincontro">L’incontro</h2>
    <p>L’incontro tra le prime navi dei due sistemi stellari, il Sistema
      Solare e Alfa Centauri, avvenne nel <strong>2420</strong> vicino
      all’asteroide Cape Null a mezza unità astronomica dal portale.</p>
    <p>Si scatenò un conflitto freddo per il controllo del portale istigato
      dalle Nazioni Unite, che lo volevano proprietà dell’Espanso data la
      maggiore vicinanza al Sistema Solare.</p>
    <hr/>
    <p>
       
    </p>
    <h2 id="il-conflitto-freddo-dovuto-allisolamento">Il conflitto freddo dovuto all’isolamento</h2>
    <p>Il conflitto freddo durò dal <strong>2421</strong> fino al
      <strong>2426</strong> e coinvolse le sole flotte dei due sistemi
      stellari, senza comunicazione con i relativi sistemi. Il ritardo di
      comunicazioni di andata e ritorno con le Periferie dura infatti 4 anni
      per feedback dal Sistema Solare e 5 anni per feedback da Proxima
      Centauri. La crisi durò infatti 5 anni, il tempo necessario a ricevere
      feedback sul da farsi da entrambe i sistemi. Le flotte dell’Espanso si
      imposero fortemente su quelle centauriane per la superiorità numerica e
      la certezza di avere il vantaggio della vicinanza a casa per
      un’eventuale richiesta di rinforzi. Fu grazie alla decisione illuminata
      dei governi dell’espanso e alla passività dei governi di Proxima
      Centauri che non scoppiò un conflitto militare. Durante questo periodo
      pochissime navi scientifiche si avvicinarono al portale, tenute sotto
      tiro da entrambe le flotte. Mentre le flotte dell’Espanso stabilirono
      una base operativa su <strong>Cape Null</strong>, le flotte centauriane
      costruirono una <strong>stazione spaziale</strong> utilizzando i
      materiali di asteroidi più piccoli entro 100 unità astronomiche di
      distanza. Quella stazione spaziale, integrata dagli sforzi degli
      ingegneri dell’espanso e modificata da entrambe le fazioni, sarebbe
      diventata il covering Shedar, il primo frammento delle Periferie del
      Vuoto, nel 2460.</p>
    <hr/>
    <p>
       
    </p>
    <h2 id="il-progetto-newptune">Il progetto Newptune</h2>
    <p>Il progetto Newptune vide la costruzione della stazione oggi
      conosciuta come le Periferie del Vuoto. Il progetto fu proposto nel
      <strong>2427</strong> dall’Alleanza dei Pianeti Esterni, approvato dal
      Sistema Solare nel <strong>2428</strong> e approvato da Proxima Centauri
      nel <strong>2434</strong>. A seguito delle misurazioni dei campi
      gravitazionali sopra le due facce del portale si definì la possibità di
      costruire un anello di moduli abitativi nei punti di Lagrange del campo
      gravitazionale. I moduli abitativi sarebbero stati stabili se situati a
      cavallo del portale, affacciati su entrambi i lati. Per questa
      caratteristica i moduli coprivano parte della vista del portale verso lo
      spazio e furono quindi chiamati covering, coperture.</p>
    <p>Il primo covering, il <strong>covering Shedar</strong>, in onore
      della stella a cui puntava, fu ricavato dalla stazione spaziale
      costruita dai centauriani, aggiungendo una enorme carenatura esterna
      alla stazione spaziale che rispettasse le specifiche di ancoraggio al
      campo gravitazionale. La scelta permise di avere già un nucleo operativo
      sul portale in pochi anni: la carenatura fu iniziata nel
      <strong>2458</strong>, data ufficiale di inizio del progetto, e
      completata in appena un anno. Il covering Shedar fu fissato all’anello
      nel <strong>2459</strong> e riempito negli anni successivi.</p>
    <p>Dal modo in cui era stato costruito era chiaro che sedendo a
      cavalcioni sul bordo del portale e avendo destinato le due facce del
      portale rispettivamente ai due sistemi stellari a cui erano rivolte, fu
      chiaro che era necessario collaborare per costruire tutti i covering.
      Così fu, esternamente i covering sono una struttura continua da una
      faccia all’altra del portale. Internamente, tuttavia, le strutture
      furono progettate per dare un taglio netto tra le due sezioni dedicate
      ai due sistemi stellari. Il taglio avvenne utilizzando il piano
      geometrico su cui giace il portale, dove il verso del campo
      gravitazionale cambiava. In questo modo, da ogni faccia, centauriani e
      abitanti dell’espanso, avrebbero visto il portale sotto i loro
      piedi.</p>
    <p><strong>Sirius covering</strong> fu il secondo enorme blocco a
      partecipare alle Periferie. Si trattava di un covering ancora più esteso
      del primo, che abbracciava quasi un quarto del bordo del portale. Su
      questo covering, costruito tra il <strong>2466</strong> e il
      <strong>2470</strong> e innestato nel <strong>2470</strong>, naquero
      moltissime scuole, zone residenziali, esercizi pubblici. Il motivo
      principale per la cotruzione del covering fu però l’allocazione
      all’interno del porto di Dlya Vsekh: un porto prevalentemente militare a
      controllo maggioritario terrestre e marziano per “garantire” la pace nel
      sistema. A questo covering furono in seguito innestati due enormi moduli
      il primo nel <strong>2484</strong> su cui sorsero una compagnia
      mineraria e una fabbrica automatica e il secondo nel
      <strong>2501</strong></p>
    <hr/>
    <p>
       
    </p>
    <h2 id="i-quartieri-sospesi">I quartieri sospesi</h2>
    <p>I <strong>quartieri sospesi</strong> sono forse il settore più
      caratteristico delle Periferie del Vuoto. Furono costruiti tra il
      <strong>2472</strong> e il <strong>2480</strong> a partire dai covering
      Shedar e Sirius. Questa struttura non si innesta su un covering solo, ma
      su entrambi. Fu costruita per poter posizionare gli esperimenti
      direttamente sopra il portale e poterli avvicinare in modo stabile come
      mai prima. I quartieri sono l’unica struttura che richieda un progetto
      portante dei suoi pilastri, in quanto non si trova in un punto di
      Lagrange del campo gravitazionale generato dal portale, ma mantiene la
      sua posizione appoggiandosi sugli altri due covering. Fu l’unica
      struttura univocamente costruita dall’Espanso, senza il contributo di
      Proxima Centaruri.</p>
    <hr/>
    <p>
       
    </p>
    <h2 id="lespansione-verso-lira">L’espansione verso Lira</h2>
    <p>L’espansione verso la costellazione Lira avvenne dopo che uno
      scienziato centauriano, Jav Goeth, trovò un modo per distorcere il campo
      gravitazionale del portale e distorcerlo per alcune centinaia di
      chilometri. Fu una scoperta sensazionale che cambiò il modo di operare
      dell’umanità nelle Periferie. La scoperta fu fatta nel
      <strong>2469</strong> e nel <strong>2474</strong> iniziò la costruzione
      del <strong>Centauri covering</strong>, che finì e fu innestato nel
      <strong>2482</strong>. Tale covering ospitava un enorme modulatore di
      campo gravitazionale capace di estendere la gravità generata dal portale
      a moduli ben più distanti dal suo centro. La costruzione funzionò
      perfettamente e permise i due innesti al covering Sirius e la
      costruzione di tre nuovi covering puntanti verso lira:</p>
    <ul>
      <li><strong>Vega covering</strong> (inizio <strong>2483</strong> - fine
        <strong>2487</strong>)
      </li>
      <li><strong>Antares covering</strong> (inizio <strong>2484</strong> -
        fine <strong>2488</strong>)
      </li>
      <li><strong>Barnard covering</strong> (inizio <strong>2498</strong> -
        fine <strong>2504</strong>)
      </li>
    </ul>
    <p>I primi due nuovi covering servirono a decentrare le funzioni del
      covering Shedar: Vega covering divenne il centro amministrativo,
      magazzino e piccola fabbrica, Antares covering prese la funzione di
      università e centro di ricerca oltre che di base per l’esplorazione
      dell’ambiente interstellare intorno al portale.</p>
    <p>Barnard covering, più recente, ospitò le comunicazioni con l’Espanso
      prima allocate su Shedar covering e poi su Sirius Covering. Fu inoltre
      utilizzato come magazzino. La parte più vicina al portale Si trova
      ancora in fase di riempimento nel <strong>2522</strong>.</p>
  </main>

  <div class="offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="offcanvasSommario">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasLabelSommario">Navigazione Regolamento</h5>
      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <ul>
        <li><a href="#introduzione">Introduzione</a></li>
        <li><a href="#la-scoperta">La scoperta</a></li>
        <li><a href="#lincontro">L’incontro</a></li>
        <li><a href="#il-conflitto-freddo-dovuto-allisolamento">Il conflitto freddo dovuto all’isolamento</a></li>
        <li><a href="#il-progetto-newptune">Il progetto Newptune</a></li>
        <li><a href="#i-quartieri-sospesi">I quartieri sospesi</a></li>
        <li><a href="#lespansione-verso-lira">l’espansione verso Lira</a></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
li a {
  color: white;
  text-decoration: none;
}

li a:hover {
  text-decoration: underline;
}
</style>

<style>
#bottoneSommario {
  position: fixed;
  right: 50px;
  bottom: 50px;
}
</style>