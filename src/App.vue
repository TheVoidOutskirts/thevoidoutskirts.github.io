<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import {Personaggi} from "@/assets/data";
import type {Personaggio} from "@/assets/data";
import {Bar} from "vue-chartjs";
import {computed, reactive, ref} from "vue";

const attackerIndex = ref(-1)
const attacker = computed(() => attackerIndex.value >= 0 ? Personaggi[attackerIndex.value] : null)

const weaponIndex = ref(-1)

</script>

<template>
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
  <div class="container">
    <h1>Calcolatore</h1>
    <!-- Selezione attaccante -->
    <div class="row">
      <div class="col-3">
        <h2>Scegli un attaccante</h2>
        <div v-for="(character, index) in Personaggi">
          <input type="radio" :value="index" v-model="attackerIndex">
          <label :for="index">{{ character.nome }}</label>
        </div>
      </div>
      <div class="col" v-if="attacker != null">
        <h2>Dettagli personaggio</h2>
        <div><span class="h4">Nome:</span> <span class="ps-3">{{ attacker?.nomeCompleto }}</span></div>
        <div><span class="h4">Armatura:</span> <span class="ps-3">{{ attacker?.armatura }}</span></div>
        <div>
          <span class="h4">Competenza Attacco:</span> <span class="ps-3">{{ attacker?.competenzaAttacco }}</span>
        </div>
        <div>
          <span class="h4">Competenza Difesa:</span> <span class="ps-3">{{ attacker?.competenzaDifesa }}</span>
        </div>
        <div class="row">
          <div class="col-1">Armi:</div>
          <div v-if="attacker?.armi.length === 0">Il personaggio non ha armi</div>
          <div v-for="(weapon, index) in attacker?.armi">
            <input type="radio" :value="index" v-model="weaponIndex">
            <label :for="index">{{weapon}}</label>
          </div>
        </div>
      </div>
    </div>

    <!-- Grafico probabilità attacco -->
    <div class="row">
      <div class="col" v-if="attackerIndex">
        <h2>Probabilità di colpire</h2>
        <!-- Bar chart -->
      </div>
      <div class="col" v-if="!attackerIndex" style="text-align: center">
        <p>Seleziona un personaggio!</p>
      </div>
    </div>
  </div>

</template>

<style>/*
@import 'assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a, .green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
*/</style>
