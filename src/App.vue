<script setup lang="ts">
import {ValoriCopertura} from "@/assets/Copertura";

import {computed, ref, watch} from "vue";
import BarChart from "@/components/BarChart.vue";
import type {Arma, Personaggio} from "@/assets/types";
import {Armature} from "@/assets/Armature";
import {Personaggi} from "@/assets/Personaggi";
import {Armi} from "@/assets/Armi";

const attackerIndex = ref(-1);
const attacker = computed<Personaggio | null>(() => attackerIndex.value >= 0 ? Personaggi[attackerIndex.value] : null);

const weaponIndex = ref(-1);
const weapon = computed(() => {
  const wi = weaponIndex.value < 0 ? 0 : weaponIndex.value;

  const weaponCode = attacker.value?.armi[wi].arma
  // todo check
  return Armi.find(weapon => weapon.codice == weaponCode) ?? Armi[0]
});

function resetWeapon() {
  weaponIndex.value = -1;
}

const defenderIndex = ref(-1);
const defender = computed(() => defenderIndex.value >= 0 ? Personaggi[defenderIndex.value] : null)
const coverValue = ref(0);

// todo move null as far as possible; don't display the chart if it is passed.
// todo cleanup shit
function calcolaPercentualeAttacco(arma: Arma, attaccante: Personaggio, difensore: Personaggio, copertura: number): number[] {
  const probVett = [0.7143, 0.7143, 0.7143, 0.7143, 0.7857, 0.8571, 0.9286, 1]

  const nomeArmaturaDifensore = difensore.armatura
  const armaturaDifensore = Armature.find(e => e.codice == nomeArmaturaDifensore)
  if (!armaturaDifensore)
    throw "Could not find specified armor"

  const tipoAttacco = arma.tipoDanno;
  const gravitaDanno = arma.gravitaDanno
  const resistenza = armaturaDifensore?.gravitaDanno?.[gravitaDanno]?.[tipoAttacco][0]

  if (!resistenza)
    throw "Tipo dell'arma non definito (tipi possibili: taglio, perforante, esplosione, ustione";

  const probArray: number[] = new Array(30)
  for (let i = 0; i < 30; i++) {
    if (i < 8 && arma.tipoDanno == 'perforante')
      probArray[i] = Math.round(arma.probabilita[i] * (100 + 5 * (attaccante.competenzaAttacco - difensore.competenzaDifesa) - resistenza * probVett[i] - copertura) / 100)
    else
      probArray[i] = Math.round(arma.probabilita[i] * (100 + 5 * (attaccante.competenzaAttacco - difensore.competenzaDifesa) - resistenza - copertura) / 100)
  }

  return probArray

}

const attackPercentage = computed(() => {
  return calcolaPercentualeAttacco(weapon.value,
      attacker.value ?? Personaggi[0],
      defender.value ?? Personaggi[0],
      coverValue.value
  )
})

/*watch([attackerIndex, weaponIndex],
    async ([newAttackerIndex, newWeaponIndex], [oldAttackerIndex, oldWeaponIndex]) => {
      if (newAttackerIndex >= 0 && newWeaponIndex >= 0) {
        const weaponProbs = Armi.find(weapon => weapon.codice == attacker.value?.armi[weaponIndex.value])?.probabilita
        if (!weaponProbs)
          return

        chartData.value.datasets[0].data = weaponProbs
      }
    }
)

const chartData = ref<ChartData<'bar'>>({
  labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
  datasets: [{
    label: 'Data One',
    backgroundColor: '#F87979',
    data: [40, 20, 12]
  }]
})*/

</script>

<template>
  <div class="container">
    <h1>Calcolatore</h1>
    <!-- Selezione attaccante -->
    <div class="row">
      <div class="col">
        <h2>Scegli un attaccante</h2>
        <div class="form-check" v-for="(character, index) in Personaggi" :key="index">
          <input class="form-check-input" type="radio" :value="index" v-model="attackerIndex" @click="resetWeapon">
          <label class="form-check-label" :for="index">{{ character.nome }}</label>
        </div>
      </div>
      <div class="col">
        <div v-show="attacker != null">
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
                <label class="form-check-label" :for="index">{{ weapon.arma }}</label>
              </div>
            </div>
          </div>

        </div>
      </div>


      <div class="col">
        <h2>Scegli un difensore</h2>
        <div class="form-check" v-for="(character, index) in Personaggi" :key="index">
          <input class="form-check-input" type="radio" :value="index" v-model="defenderIndex">
          <label class="form-check-label" :for="index">{{ character.nome }}</label>
        </div>
      </div>
      <div class="col">
        <div v-show="defender != null">
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
                <label class="form-check-label" :for="index">{{ index }}</label>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- Grafico probabilità attacco -->
    <div class="row">
      <div class="col">
        <h2>Probabilità di colpire</h2>
        <BarChart :height="300" :attack-data="attackPercentage"/>
      </div>
    </div>
  </div>
  <!--  <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125"/>

      <div class="wrapper">
        <HelloWorld msg="You did it!"/>

        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView/>-->
</template>

<style></style>
