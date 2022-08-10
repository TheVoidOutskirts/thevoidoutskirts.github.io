<script setup lang="ts">
import {useDataStore} from "@/stores/data";
import {inject, onMounted, ref} from "vue";

import {Modal} from 'bootstrap'
import type {AxiosStatic} from "axios";
import type {AllData} from "@/assets/Types";

// https://stackoverflow.com/a/69013153/3560579
const axios = inject<AxiosStatic>('axios') ?? (() => {
  throw new Error("Axios is not defined");
})();

const store = useDataStore();
let keyModal: Modal | undefined

const modalKey = ref("")
const isLoadingData = ref(false);

onMounted(() => {
  keyModal = new Modal("#staticBackdrop");

  if (!store.isDataLoaded) {
    keyModal.show();
  }
})

function loadData() {
  // temporary fix for api
  const key = modalKey.value.length > 0 ? modalKey.value : "asdf"

  isLoadingData.value = true;

  axios.get(`https://enigma-data.deno.dev/${key}`).then(ax => {
    store.loadData(ax.data as AllData)

    keyModal?.hide()
  }).catch(reason => {
    console.error(reason);
  });
}

</script>

<template>
  <div class="d-flex flex-column justify-content-center align-items-center" style="height: 100%">
    <div class="mt-2">
      <router-link class="btn btn-outline-primary" to="/calculator">Vai al Calcolatore 🧮</router-link>
    </div>
    <div class="mt-2">
      <router-link class="btn btn-outline-primary" to="/naval">Vai al Calcolatore Navale 🚀</router-link>
    </div>
    <div class="mt-2">
      <router-link class="btn btn-outline-primary" to="/unit-viewer">Vai al Unit Viewer 🔫</router-link>
    </div>

    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
         aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Caricamento dati</h5>
          </div>
          <div class="modal-body">
            <p>Sembra che non siano stati caricati i dati.</p>
            <p>Se per caso sei Tommaso, puoi caricare i dati completi, altrimenti solo i dati pubblici saranno
              caricati.</p>

            <div class="form-floating">
              <input class="form-control" type="password" id="authKeyInput" placeholder="123" v-model="modalKey">
              <label for="authKeyInput">Inserisci la <strong>chiave di autenticazione</strong></label>
              <div class="form-text text-center">Solo Tom ce l'ha! 🤫</div>
            </div>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="loadData">
              <span class="me-2" v-if="modalKey.length <=0">Non sono Tommaso</span>
              <span class="me-2" v-else>Carica i dati completi</span>
              <span class="spinner-border spinner-border-sm" v-show="isLoadingData"></span>
            </button>
          </div>
        </div>
      </div>
    </div>


    <!--    <div class="mt-4">
          <div v-if="!store.isDataLoaded" class="d-flex flex-column align-items-center">
              <button class="btn btn-warning">Imposta una chiave d'accesso</button>
              <button class="btn btn-outline-warning mt-2">Accedi senza chiave</button>
          </div>
          <button v-else class="btn btn-danger">Logout</button>
        </div>-->
  </div>
</template>

<style scoped>
</style>
