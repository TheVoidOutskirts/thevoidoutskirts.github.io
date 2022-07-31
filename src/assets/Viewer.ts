import type { Arma } from "./Armi";
import type { Armatura } from "./Armature";
import type { Azione, Personaggio } from "./Personaggi";
import type { Giorno, Evento } from "./Cronologia";
import { Cronologia } from "./Cronologia.ts";

const title = (t: string) => `\n### ${t}\n\n`
const subtitle = (t: string) => `\n#### ${t}\n\n`
const subsubtitle = (t: string) => `\n##### ${t}\n\n`
const row = (r: string[]) => `|${r.join('|')}|`
const field = (k: string, v: string) => v ? `**${k}**: ${v}\n` : ""
const table = (h: string[], r: string[][]) => `${row(h)}\n${row(h.map(_ => '---:'))}\n${r.map(row).join('\n')}\n`
const ul = (_: string[]) => _.map(s => `- ${s}\n`).join('')
const mapS = <A,B>(s: A | undefined, f : (s: A) => B) => s ? f(s) : ''

const mdArma = (a: Arma) =>
    title(a.nome) +
    field('Codice', a.codice) +
    field('Tipo arma', a.tipo) +
    subtitle('Danno') +
    field('Gravità danno', a.gravitaDanno) +
    field('Dadi danno', a.danno.map(n => `d${n}`).join(',')) +
    field('Tipo danno', a.tipoDanno) +
    subtitle('Probabilità di colpire') +
    table(['Distanza', '% probabilità di colpire'], a.probabilita.map((p, i) => [(i + 1).toString(), p.toString()])) +
    subtitle('Descrizione') +
    a.descrizione + '\n'

const bonusMalus = (n: number) => Math.floor((n - 10) / 2)

const titoliAzioni: Record<Azione, string> = {
    'arma': "**Arma**:\nVedi arma specifica",
    'presa': "**Presa**:\nProva di forza, se ha successo impedisce al bersaglio di muoversi. Il bersaglio deve essere medio o piccolo.",
    'spinta': "**Spinta**:\nProva di forza, se ha successo sposta il bersaglio in linea retta (di un numero di caselle funzione della gravità) oppure lo fa cadere a terra. Il bersaglio deve essere medio o piccolo.",
    'divincolarsi': "**Divincolarsi**:\nSe bersaglio di presa, può spendere l’azione per divincolarsi con una prova di forza o di precisione. Se ha successo, si libera dalla presa.",
    'distrarre': "**Distrarre**:\nDistrae in qualche modo uno o più bersagli, portando uno svantaggio.",
    'comunicare': "**Comunicare**:\nPuò comunicare con umani e robot alleati e nemici."
}

const nextGreater = (n: number, o: { [k: number]: any }) => Object.keys(o).map(x => parseInt(x)).sort((a, b) => b - a).reduce((s, x) => x > n ? (x - 1).toString() : s, "..")


const mdPersonaggi = (p: Personaggio) =>
    title(p.nome)
    + mapS(p.fazione,        s => field('Fazione', s))
    + mapS(p.luogo,          s => field('Luogo', s))
    + mapS(p.livelloDiSfida, s => field('Livello di sfida', s.toString()))
    + mapS(p.attributi,      s => field('Attributi', s))
    + title('Statistiche')
    + table(['Abilità', 'Punteggio', 'Bonus/malus'],
        [['Gravità   muscolare ', p?.statistiche?.gravità_muscolare?.[0].toString() ?? "-", p?.statistiche?.gravità_muscolare?.[1].toString() ?? "-",],
        ['Precisione          ', p?.statistiche?.precisione?.[0].toString() ?? "-", p?.statistiche?.precisione?.[1].toString() ?? "-",],
        ['Ossatura            ', p?.statistiche?.ossatura?.[0].toString() ?? "-", p?.statistiche?.ossatura?.[1].toString() ?? "-",],
        ['Multitasking        ', p?.statistiche?.multitasking?.[0].toString() ?? "-", p?.statistiche?.multitasking?.[1].toString() ?? "-",],
        ['Calcolo             ', p?.statistiche?.calcolo?.[0].toString() ?? "-", p?.statistiche?.calcolo?.[1].toString() ?? "-",],
        ['Applicazione        ', p?.statistiche?.applicazione?.[0].toString() ?? "-", p?.statistiche?.applicazione?.[1].toString() ?? "-",],
        ])
    + mapS(p.dimensioni, s => field('Dimensioni', s))
    + field('Sensi', " ")
    + ul([`Percezione: ${p?.sensi?.percezione}`,
          `Percezione passiva: ${p?.sensi?.percezionePassiva}`,
          `Iniziativa: ${p?.sensi?.iniziativa}`])
    + subtitle('Azioni')
    + p?.azioni?.map(a => titoliAzioni[a]).join('\n\n')
    + subtitle('Vulnerabilità')
    + [["**Danno da taglio**:\n", p?.vulnerabilità?.taglio],
    ["**Danno da perforazione**:\n", p?.vulnerabilità?.perforazione],
    ["**Danno da esplosione o impatto**:\n", p?.vulnerabilità?.impatto],
    ["**Danno da elettrico**:\n", p?.vulnerabilità?.elettrico],
    ["**Danno da ustione**:\n", p?.vulnerabilità?.ustione]]
        .map(([t, a]) =>
            a ? `${t}${ul(Object.entries(a).map(([k, v]) => `${k}-${nextGreater(parseInt(k), a)} -> ${v}`))}` : "Nessuna").join("\n")
    + p.armi.map((a, i) =>
        subtitle(`Equipaggiamento ${i + 1}`)
        + ul([`Arma: ${a.arma}`, `Modifiche: ${a.modifiche.join(',')}`])
    ).join('')
    + title('Descrizione')
    + p.descrizione + '\n'

const mdArmatura = (a: Armatura) =>
    title(a.nome)
    + field('Codice', a.codice)
    + field('Tipo armatura', a.tipoArmatura)
    + subtitle('Riduzione % probabilità di colpire e danno')
    + Object.entries(a.gravitaDanno)
            .map(([k, v]) =>
                field("Gravità danno", k)
                + table(['Tipo danno', 'Riduzione % probabilità di colpire', 'Riduzione % danno'],
                    Object.entries(v).map(([k, v]) => [k, ...v.map(n => n.toString())])))
    + mapS(a.funzionalità, s => subtitle('Funzionalità') + ul(s))
    + subtitle('Vulnerabilità')
    + [["**Danno da taglio**:\n", a?.vulnerabilità?.taglio],
    ["**Danno da perforazione**:\n", a?.vulnerabilità?.perforazione],
    ["**Danno da elettrico**:\n", a?.vulnerabilità?.elettrico]]
        .map(([t, a]) =>
            a ? `${t}${ul(Object.entries(a).map(([k, v]) => `${k}-${nextGreater(parseInt(k), a)} -> ${v}`))}` : "Nessuna").join("\n")
    + title('Descrizione')
    + a.descrizione + '\n'

const NomiMese: Record<number,string> = {
    1  : "gennaio",
    2  : "febbraio",
    3  : "marzo",
    4  : "aprile",
    5  : "maggio",
    6  : "giugno",
    7  : "luglio",
    8  : "agosto",
    9  : "settembre",
    10 : "ottobre",
    11 : "novembre",
    12 : "dicembre",
}

const mdCronologia = (c: Giorno[]) =>
    title('Cronologia')
    + c.map(a =>
        subtitle(`${a.when.day} ${NomiMese[a.when.month]} ${a.when.year}`)
        + a.events.map((e, i) =>
            subsubtitle(`${a.when.year}${a.when.month}${a.when.day}.${i+1}`)
            + (e.who === 'scenario' ? "<Scenario>" : e.who.map(s => `[[${s}]]`).join(','))
            + e.what
        ).join('\n')).join('\n')

console.log(mdCronologia(Cronologia))
