<script setup lang="ts">
import {ValoriCopertura} from "@/assets/Copertura";

import {computed, ref, watch} from "vue";
import BarChart from "@/components/BarChart.vue";
import {Armature} from "@/assets/Armature";
import {Personaggi} from "@/assets/Personaggi";
import type {Personaggio} from "@/assets/Personaggi"
import {Armi} from "@/assets/Armi";
import type {Arma} from "@/assets/Armi"
import {ChartDataset} from "chart.js";

const coverValue = ref<number | undefined>(undefined);

const attacker = ref<Personaggio | null>(null);
const defender = ref<Personaggio | null>(null);

const useAllWeapons = ref(false);

const attackerWeapons = computed<Arma[]>(() => {
  if (attacker.value == null) return [];
  // todo return not only all weapons, but also the weapons owned by the character (by marking their name in some way)
  // this to be able to use modifications owned by the player!
  if (useAllWeapons.value) return Armi;

  const weapons: Arma[] = [];

  attacker.value.armi.forEach(wc => {
    const foundWeapon = Armi.find(w => w.codice == wc.arma)
    if (foundWeapon !== undefined) {
      weapons.push(foundWeapon);
    }
  })

  return weapons;
});

const weapon = ref<Arma | null>(null);

// Fix for vue-select not emitting an event when the selection is cleared.
watch(attacker, () => {
  weapon.value = attackerWeapons.value[0];
})

function calcolaPercentualeAttacco(arma: Arma, attaccante: Personaggio, difensore: Personaggio, copertura: number): number[] {
  const probVett = [0.7143, 0.7143, 0.7143, 0.7143, 0.7857, 0.8571, 0.9286, 1]

  const armaturaDifensore = Armature.find(e => e.codice == difensore.armatura)
  if (!armaturaDifensore)
    throw `Arma difensore non trovata ${difensore.armatura}`

  const tipoDanno = arma.tipoDanno;
  const gravitaDanno = arma.gravitaDanno
  const resistenza = armaturaDifensore.gravitaDanno?.[gravitaDanno]?.[tipoDanno][0] ?? 0;

  const probArray: number[] = new Array(30)
  for (let i = 0; i < 30; i++) {
    if (i < 8 && arma.tipoDanno == 'perforante')
      probArray[i] = Math.round(arma.probabilita[i] * (100 + 5 * (attaccante.competenzaAttacco - difensore.competenzaDifesa) - resistenza * probVett[i] - copertura) / 100)
    else
      probArray[i] = Math.round(arma.probabilita[i] * (100 + 5 * (attaccante.competenzaAttacco - difensore.competenzaDifesa) - resistenza - copertura) / 100)
  }
  return probArray.map(clamp)
}

const clamp = (x: number) => Math.min(99, Math.max(1, x))

const weaponPercentage = computed(() => {
  return weapon.value?.probabilita
})

const weaponPercentageChartData = computed<ChartDataset<'bar', number[]>[]>(() => {
  return [{
    label: "Probabilità di colpire base dell'arma",
    data: weaponPercentage.value ?? [],
    backgroundColor: ['rgba(54, 162, 235, 0.8)'],
    borderColor: ['rgba(54, 162, 235, 1)'],
    borderWidth: 1
  },]
})

const attackPercentage = computed(() => {
  if (weapon.value === null) return undefined;
  if (attacker.value === null) return undefined;
  if (defender.value === null) return undefined;
  if (coverValue.value === undefined) return undefined;
  return calcolaPercentualeAttacco(weapon.value, attacker.value, defender.value, coverValue.value);
})

const attackPercentageChartData = computed<ChartDataset<'bar', number[]>[]>(() => {
  return [{
    label: "Probabilità di colpire",
    data: attackPercentage.value ?? [],
    backgroundColor: ['rgba(54, 162, 235, 0.8)'],
    borderColor: ['rgba(54, 162, 235, 1)'],
    borderWidth: 1
  }]
})

</script>

<template>
  <div class="container">
    <h1 class="text-center">Calcolatore</h1>
    <!-- Selezione attaccante -->
    <div class="row">
      <div class="col-6">
        <div class="mb-4">
          <h2 class="text-center">Scegli un attaccante</h2>
          <v-select
              :options="Personaggi"
              label="nomeCompleto"
              v-model="attacker"></v-select>
        </div>
        <div v-show="attacker" class="mb-4">
          <h2>Dettagli personaggio</h2>
          <div><span class="h4">Nome:</span> <span class="ps-3">{{ attacker?.nomeCompleto }}</span></div>
          <div><span class="h4">Armatura:</span> <span class="ps-3">{{ attacker?.armatura }}</span></div>
          <div>
            <span class="h4">Competenza Attacco:</span> <span class="ps-3">{{ attacker?.competenzaAttacco }}</span>
          </div>
          <div>
            <span class="h4">Competenza Difesa:</span> <span class="ps-3">{{ attacker?.competenzaDifesa }}</span>
          </div>
          <div>
            <span class="h4">Resistenza al danno:</span>
            <span class="ps-3">{{ attacker?.resistenzaAlDanno ?? 0 }}</span>
          </div>
          <div>
            <span class="h4">Armi:</span>
            <div v-if="attackerWeapons.length === 0">Il personaggio non ha armi</div>
            <div v-else>
              <v-select
                  :options="attackerWeapons"
                  label="nome"
                  v-model="weapon"></v-select>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="attackerAllWeaponsCheckbox"
                     v-model="useAllWeapons">
              <label class="form-check-label" for="attackerAllWeaponsCheckbox">Mostra tutte le armi</label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Probabilità dell'arma -->
    <div class="row justify-content-center">
      <div class="col-sm-10 col-md-10 col-lg-8 col-xl-8 col-xxl-8">
        <BarChart :data="weaponPercentageChartData"/>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-6">
        <div class="mb-4">
          <h2 class="text-center">Scegli un difensore</h2>
          <v-select :options="Personaggi"
                    label="nomeCompleto"
                    v-model="defender"></v-select>
        </div>
        <div v-show="defender">
          <h2>Dettagli personaggio</h2>
          <div><span class="h4">Nome:</span> <span class="ps-3">{{ defender?.nomeCompleto }}</span></div>
          <div><span class="h4">Armatura:</span> <span class="ps-3">{{ defender?.armatura }}</span></div>
          <div>
            <span class="h4">Competenza Attacco:</span> <span class="ps-3">{{ defender?.competenzaAttacco }}</span>
          </div>
          <div>
            <span class="h4">Competenza Difesa:</span> <span class="ps-3">{{ defender?.competenzaDifesa }}</span>
          </div>
          <div>
            <span class="h4">Resistenza al danno:</span>
            <span class="ps-3">{{ defender?.resistenzaAlDanno ?? 0 }}</span>
          </div>
          <div>
            <span class="h4">Copertura:</span>
            <div>
              <div class="form-check" v-for="(cover, index) in ValoriCopertura" :key="index">
                <input class="form-check-input" type="radio" :value="cover" v-model="coverValue">
                <label class="form-check-label">{{
                    // todo change cover type to object with string
                    index === "pesante" ? "Copertura pesante" :
                        index === "nessuna" ? "Nessuna copertura" :
                            index === "leggera" ? "Leggera copertura" :
                                index === "alta" ? "Alta esposizione" : ""
                  }}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Grafico probabilità attacco -->
    <div class="row justify-content-center">
      <div class="col-sm-10 col-md-10 col-lg-8 col-xl-8 col-xxl-8">
        <BarChart :data="attackPercentageChartData"/>
      </div>
    </div>
  </div>
</template>

<style></style>
