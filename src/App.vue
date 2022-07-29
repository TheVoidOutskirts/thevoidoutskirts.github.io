<script setup lang="ts">
import {ValoriCopertura} from "@/assets/Copertura";

import {computed, ref} from "vue";
import BarChart from "@/components/BarChart.vue";
import {Armature} from "@/assets/Armature";
import {Personaggi} from "@/assets/Personaggi";
import type {Personaggio} from "@/assets/Personaggi"
import {Armi} from "@/assets/Armi";
import type {Arma} from "@/assets/Armi"

const attackerIndex = ref<number | undefined>(undefined);
const weaponIndex = ref<number | undefined>(undefined);
const defenderIndex = ref<number | undefined>(undefined);
const coverValue = ref<number | undefined>(undefined);

const attacker = computed<Personaggio | undefined>(() => attackerIndex.value !== undefined ? Personaggi[attackerIndex.value] : undefined);
const defender = computed(() => defenderIndex.value !== undefined ? Personaggi[defenderIndex.value] : undefined)

const weapon = computed(() => {
  if (weaponIndex.value === undefined) return undefined;
  if (attacker.value === undefined) return undefined;
  const weaponCode = attacker.value.armi[weaponIndex.value].arma
  return Armi.find(weapon => weapon.codice == weaponCode)
});

const resetWeapon = () => {
  weaponIndex.value = undefined;
}

// todo move null as far as possible; don't display the chart if it is passed.
// todo cleanup shit
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

const weaponPercentage = computed(() => {
  if (weapon.value === undefined) return undefined;
  return weapon.value.probabilita
})

const clamp = (x: number) => Math.min(99, Math.max(1, x))

const attackPercentage = computed(() => {
  if (weapon.value === undefined) return undefined;
  if (attacker.value === undefined) return undefined;
  if (defender.value === undefined) return undefined;
  if (coverValue.value === undefined) return undefined;
  return calcolaPercentualeAttacco(weapon.value, attacker.value, defender.value, coverValue.value);
})
</script>

<template>
  <div class="container">
    <h1 class="text-center">Calcolatore</h1>
    <!-- Selezione attaccante -->
    <div class="row">
      <div class="col">
        <h2>Scegli un attaccante</h2>
        <div class="form-check" v-for="(character, index) in Personaggi" :key="index">
          <input class="form-check-input" type="radio" :value="index" v-model="attackerIndex" @click="resetWeapon">
          <label class="form-check-label">{{ character.nome }}</label>
        </div>
      </div>
      <div class="col">
        <div v-show="attacker !== undefined">
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
            <span class="h4">Armi:</span>
            <div v-if="attacker?.armi.length === 0">Il personaggio non ha armi</div>
            <div v-else>
              <div class="form-check" v-for="(weapon, index) in attacker?.armi" :key="index">
                <input class="form-check-input" type="radio" :value="index" v-model="weaponIndex">
                <label class="form-check-label">{{ weapon.arma }}</label>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- Probabilità dell'arma -->
    <BarChart :title="'Probabilità di colpire base dell\'arma'" :data="weaponPercentage"/>

    <div class="row">
      <div class="col">
        <h2>Scegli un difensore</h2>
        <div class="form-check" v-for="(character, index) in Personaggi" :key="index">
          <input class="form-check-input" type="radio" :value="index" v-model="defenderIndex">
          <label class="form-check-label">{{ character.nome }}</label>
        </div>
      </div>
      <div class="col">
        <div v-show="defender !== undefined">
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
    <BarChart :title="'Probabilità di colpire'" :data="attackPercentage"/>
  </div>
</template>

<style></style>
