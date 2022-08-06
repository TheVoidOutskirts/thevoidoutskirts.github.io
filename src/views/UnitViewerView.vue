<template>
  <h1>Unit Viewer</h1>
  <EasyDataTable
    :headers="headers"
    :items="items"
  />
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'
import type { Header, Item } from "vue3-easy-data-table";

const headers: Ref<Header[]> = ref([
      { text: "Nome", value: "nome" },
      { text: "Fazione", value: "fazione", sortable: true },
      { text: "Classe", value: "classe", sortable: true },
      { text: "Forza", value: "forza", sortable: true },
      { text: "Addestramento", value: "addestramentoS", sortable: true },
      { text: "N°elementi", value: "dimensioni.dimensioniElementi", sortable: true },
      { text: "Dimensioni", value: "dimensioni.dimensioniUnità", sortable: true },
      { text: "Sensori", value: "sensoriS", sortable: true },
      { text: "Comunicazione", value: "comunicazioneS", sortable: true },
      { text: "Criptaggio", value: "comunicazione.criptaggio", sortable: true },
      { text: "Velocità", value: "velocitaS", sortable: true },
      { text: "Attrezzatura", value: "attrezzaturaS", sortable: true },
      { text: "Gravità operativa minima",   value: 'operativaMinimaS', sortable: true },
      { text: "Gravità operativa massima",  value: 'operativaMassimaS', sortable: true },
      { text: "Gravità operativa ottimale", value: 'operativaOttimaleS', sortable: true },
      { text: "Gravità resistita massima",  value: 'resistitaMassimaS', sortable: true },
      { text: "Occultamento",  value: 'occultamentoS', sortable: true },
      { text: "Tipo", value: "tipo", sortable: true },
      { text: "Armatura", value: "armatura", sortable: true },
      { text: "Armi", value: "armiS", sortable: true },
      { text: "Capacità di trasporto", value: "capacitàDiTrasportoS", sortable: true },
      { text: "Equipaggiamento speciale", value: "equipaggiamentoSpecialeS", sortable: true },
      { text: "Descrizione", value: "descrizione", sortable: true },
    ]);

const unitaMilitari = [
    {
        permission: ["tom"],
        nome: "Rifle squad",
        fazione: "Nazioni Unite della Terra (UNN)",
        classe: "Fanteria leggera regolare",
        forza: 10,
        addestramento: {
            qualità: "addestramento regolare",
            lista: [],
        },
        dimensioni: {
            dimensioniElementi: 8,
            dimensioniUnità: "squadra",
        },
        sensori: {
            qualità: "medi",
            lista: ["sensori luce visibile"],
        },
        comunicazione: {
            raggio: 5000,
            criptaggio: "scarso",
            mezzo: ["radio morse", "radio voice"],
        },
        velocità: {
            massima: 8,
            qualità: "lenta"
        },
        attrezzatura: ["stivali magnetici", "cavi di sicurezza"],
        gravitàOperativa:{
            minima: 0,
            massima: 2,
            ottimale: 1,
            resistitaMassima: 8,
        },
        occultamento:{
            qualità: "medio",
            lista: [],
        },
        tipo: "Infantry Light",
        armatura: "UNNLP",
        armi: [
            {tipo: "R25A", quantità: 8},
            {tipo: "SSP5", quantità: 8},
        ],
        equipaggiamentoSpeciale: [],
        capacitàDiTrasporto: 10,
        descrizione: `Fucilieri regolari della marina terrestre, sono presenti in tutta la stazione e spesso sono rappresentano le prime unità a intervenire contro le minacce armate.`,
    },
    {
        permission: ["tom"],
        nome: "Light weapon squad",
        fazione: "Repubblica Congressuale Marziana (MCRN)",
        classe: "Fanteria leggera regolare",
        forza: 10,
        addestramento: {
            qualità: "addestramento regolare",
            lista: [],
        },
        dimensioni: {
            dimensioniElementi: 8,
            dimensioniUnità: "squadra",
        },
        sensori: {
            qualità: "medi",
            lista: ["sensori luce visibile"],
        },
        comunicazione: {
            raggio: 5000,
            criptaggio: "scarso",
            mezzo: ["radio morse", "radio voice"],
        },
        velocità: {
            massima: 8,
            qualità: "lenta"
        },
        attrezzatura: ["stivali magnetici", "cavi di sicurezza"],
        gravitàOperativa:{
            minima: 0,
            massima: 1.1,
            ottimale: 0.38,
            resistitaMassima: 6,
        },
        occultamento:{
            qualità: "medio",
            lista: [],
        },
        tipo: "Infantry Light",
        armatura: "MCRNGSA",
        armi: [
            {tipo: "R25A", quantità: 8},
            {tipo: "SSP5", quantità: 8},
        ],
        equipaggiamentoSpeciale: [],
        capacitàDiTrasporto: 10,
        descrizione: `Fanteria leggera della marina marziana, necessità di una linea logistica limitata ed è perfetta per mantenere fronti a bassa intensità.`,
    },
];

const qualityList = (o: { qualità: string, lista: string[] }) =>
  `${o.qualità} ${o.lista.length === 0 ? "" : `(${o.lista.join(', ')})`}`

const items: Ref<Item[]> = ref(unitaMilitari.map(u => ({
  ...u,
  addestramentoS: `${qualityList(u.addestramento)}`,
  sensoriS: `${qualityList(u.sensori)}`,
  comunicazioneS: `${u.comunicazione.raggio} m (${u.comunicazione.mezzo.join(', ')})`,
  velocitaS: `${u.velocità.massima} km/h (${u.velocità.qualità})`,
  attrezzaturaS: `${u.attrezzatura.join(', ')}`,
  operativaMinimaS: `${u.gravitàOperativa.minima} g`,
  operativaMassimaS: `${u.gravitàOperativa.massima} g`,
  operativaOttimaleS: `${u.gravitàOperativa.ottimale} g`,
  resistitaMassimaS: `${u.gravitàOperativa.massima} g`,
  occultamentoS: `${qualityList(u.occultamento)}`,
  capacitàDiTrasportoS: `${u.capacitàDiTrasporto} m³`,
  equipaggiamentoSpecialeS: `${u.equipaggiamentoSpeciale.join(', ')}`,
  armiS: `${u.armi.map(({ tipo, quantità }) => `${quantità} x ${tipo}`).join(', ')}`,
})))

</script>
