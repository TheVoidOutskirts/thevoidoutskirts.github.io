<template>
  <h1>Unit Viewer</h1>
  <EasyDataTable
    :headers="headers"
    :items="items"
    table-class-name="customize-table"
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

<style scoped>

.customize-table {
  --easy-table-border: 1px solid #445269;
  --easy-table-row-border: 1px solid #445269;

  /*--easy-table-header-font-size: 14px;*/
  /*--easy-table-header-height: 50px;*/
  --easy-table-header-font-color: #c1cad4;
  --easy-table-header-background-color: #2d3a4f;

  /*--easy-table-header-item-padding: 10px 15px;*/

  --easy-table-body-even-row-font-color: #fff;
  --easy-table-body-even-row-background-color: #4c5d7a;

  --easy-table-body-row-font-color: #c0c7d2;
  --easy-table-body-row-background-color: #2d3a4f;
  /*--easy-table-body-row-height: 50px;*/
  /*--easy-table-body-row-font-size: 14px;*/

  --easy-table-body-row-hover-font-color: #2d3a4f;
  --easy-table-body-row-hover-background-color: #eee;

  /*--easy-table-body-item-padding: 10px 15px;*/

  --easy-table-footer-background-color: #2d3a4f;
  --easy-table-footer-font-color: #c0c7d2;
  /*--easy-table-footer-font-size: 14px;*/
  /*--easy-table-footer-padding: 0px 10px;*/
  /*--easy-table-footer-height: 50px;*/

  /*--easy-table-rows-per-page-selector-width: 70px;*/
  /*--easy-table-rows-per-page-selector-option-padding: 10px;*/

  --easy-table-scrollbar-track-color: #2d3a4f;
  --easy-table-scrollbar-color: #2d3a4f;
  --easy-table-scrollbar-thumb-color: #4c5d7a;;
  --easy-table-scrollbar-corner-color: #2d3a4f;

  --easy-table-loading-mask-background-color: #2d3a4f;
}

</style>
