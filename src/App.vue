<script setup lang="ts">
import {useDataStore} from "@/stores/data";
import {inject, onMounted, ref, watch} from "vue";

import {Modal} from 'bootstrap'
import type {AxiosStatic} from "axios";
import type {AllData} from "@/assets/Types";
import type {VueCookies} from "vue-cookies";

// https://stackoverflow.com/a/69013153/3560579
const axios = inject<AxiosStatic>('axios') ?? (() => {
    throw new Error("Axios is not defined");
})();

const cookies = inject<VueCookies>('$cookies') ?? (() => {
    throw new Error("Cookies library is not defined");
})();

const store = useDataStore();

let keyModal: Modal | undefined

const modalKey = ref("")
const isLoadingData = ref(false);

onMounted(async () => {
    keyModal = new Modal("#staticBackdrop");

    const accessKey = cookies.get("accessKey") as string | null;

    if (accessKey !== null) {
        await loadData(accessKey)
    }

    if (!store.isDataLoaded) {
        keyModal.show();
    }
})

async function loadData(otherKey = "") {
    // temporary fix for api
    const key = otherKey.length > 0 ? otherKey : modalKey.value.length > 0 ? modalKey.value : "asdf"

    cookies.set("accessKey", key)

    isLoadingData.value = true;

    await axios.get(`https://enigma-data.deno.dev/${key}`).then(ax => {
        store.loadData(ax.data as AllData)

        keyModal?.hide()
        isLoadingData.value = false
    }).catch(reason => {
        console.error(reason);
    });
}

watch(() => store.isDataLoaded, () => {
    if (!store.isDataLoaded) {
        keyModal?.show();
    }
})

function logout() {
    store.deleteData()
    cookies.remove("accessKey")
}
</script>

<template>
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand">The Void Outskirts</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="mainNavbar">
                <div class="navbar-nav ms-auto" v-show="store.isDataLoaded">
                    <!--
                    - H: Combattimento
                      - DD: Combattimento tattico
                        - DDI: Combattimento tattico: CALCOLATORE
                        - DDI: Combattimento tattico: ARMI
                        - DDI: Combattimento tattico: TUTE
                        - DDI: Combattimento tattico: UNITÀ
                      - DD: Combattimento navale
                        - DDI: Combattimento navale: NAVI
                        - DDI: Combattimento navale: CALCOLATORE
                      - DD: Combattimento strategico
                        - DDI: Combattimento strategico: UNITÀ e SIMBOLI
                        - DDI: Combattimento strategico: DOTTRINE
                        - DDI: Combattimento strategico: MAPPE
                    - H: Ambientazione
                      - DD: Luoghi
                      - DD: Fazioni
                      - DD: Mappe
                    - H: Manuale
                      - DD: Manuale del giocatore: STORIA
                      - DD: Manuale del giocatore: INIZIARE LA PARTITA
                      - DD: Manuale del giocatore: SALIRE DI LIVELLO
                      - DD: Manuale del giocatore: INTERAZIONE CON IL MONDO DI GIOCO
                      - DD: Combattimento tattico: REGOLAMENTO
                      - DD: Combattimento navale: REGOLAMENTO
                      - DD: Combattimento strategico: REGOLAMENTO
                    - H: Personaggio
                      - DD: Scheda del personaggio
                      - DD: Squadra e organizzazione
                      - DD: Cronologia
                      -->
                    <div class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                           aria-expanded="false">
                            Combattimento
                        </a>
                        <ul class="dropdown-menu dropdown-menu-dark">
                            <li class="dropdown-header">Combattimento tattico</li>
                            <li><a class="dropdown-item" href="#">Calcolatore</a></li>
                            <li><a class="dropdown-item" href="#">Armi</a></li>
                            <li><a class="dropdown-item" href="#">Unità</a></li>

                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li class="dropdown-header">Combattimento navale</li>
                            <li><a class="dropdown-item" href="#">Navi</a></li>
                            <li><a class="dropdown-item" href="#">Calcolatore</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>

                            <li class="dropdown-header">Combattimento strategico</li>
                            <li><a class="dropdown-item" href="#">Unità e simboli</a></li>
                            <li><a class="dropdown-item" href="#">Dottrine</a></li>
                            <li><a class="dropdown-item" href="#">Mappe</a></li>
                        </ul>
                    </div>
                    <div class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                           aria-expanded="false">
                            Ambientazione
                        </a>
                        <ul class="dropdown-menu dropdown-menu-dark">
                            <li class="dropdown-header">Luoghi</li>
                            <li><a class="dropdown-item" href="#">Città</a></li>
                            <li><a class="dropdown-item" href="#">Regioni</a></li>
                            <li><a class="dropdown-item" href="#">Punti di interesse</a></li>

                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li class="dropdown-header">Fazioni</li>
                            <li><a class="dropdown-item" href="#">Fazioni</a></li>
                            <li><a class="dropdown-item" href="#">Organizzazioni</a></li>
                            <li><a class="dropdown-item" href="#">Personaggi</a></li>

                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li class="dropdown-header">Mappe</li>
                            <li><a class="dropdown-item" href="#">Mappe</a></li>
                            <li><a class="dropdown-item" href="#">Mappe</a></li>
                            <li><a class="dropdown-item" href="#">Mappe</a></li>
                        </ul>
                    </div>
                    <div class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                           aria-expanded="false">
                            Manuale
                        </a>
                        <ul class="dropdown-menu dropdown-menu-dark">
                            <li class="dropdown-header">Manuale del giocatore</li>
                            <li><a class="dropdown-item" href="#">Storia</a></li>
                            <li><a class="dropdown-item" href="#">Iniziare la partita</a></li>
                            <li><a class="dropdown-item" href="#">Salire di livello</a></li>
                            <li><a class="dropdown-item" href="#">Interazione con il mondo di gioco</a></li>

                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li class="dropdown-header">Combattimento tattico</li>
                            <li><a class="dropdown-item" href="#">Regolamento</a></li>

                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li class="dropdown-header">Combattimento navale</li>
                            <li><a class="dropdown-item" href="#">Regolamento</a></li>

                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li class="dropdown-header">Combattimento strategico</li>
                            <li><a class="dropdown-item" href="#">Regolamento</a></li>
                        </ul>
                    </div>
                    <div class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                           aria-expanded="false">
                            Personaggio
                        </a>
                        <ul class="dropdown-menu dropdown-menu-dark">
                            <li><a class="dropdown-item" href="#">Scheda del personaggio</a></li>
                            <li><a class="dropdown-item" href="#">Squadra e organizzazione</a></li>
                            <li><a class="dropdown-item" href="#">Cronologia</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <div class="modal fade" style="min-height: 100%" id="dataLoader" v-show="isLoadingData">
        <div class="d-flex flex-column justify-content-center align-items-center">
            <span class="spinner-grow text-light" style="width: 3rem; height: 3rem"></span>
        </div>
    </div>

    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
         aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered ">
            <div class="modal-content bg-dark">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Caricamento dati</h5>
                </div>
                <div class="modal-body">
                    <p>Sembra che non siano stati caricati i dati.</p>
                    <p>Se per caso hai una password, puoi caricare i dati completi, altrimenti solo i dati pubblici
                        saranno
                        caricati.</p>

                    <div>
                        <label class="form-label" for="authKeyInput">Inserisci la <strong>chiave di
                            autenticazione</strong></label>
                        <input class="form-control" type="password" id="authKeyInput" placeholder="Codice: 🔒🔑"
                               v-model="modalKey">
                        <div class="form-text text-center">Solo alcuni ce l'hanno! 🤫</div>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" @click="loadData('')">
                        <span class="me-2" v-if="modalKey.length <=0">Non ho una password</span>
                        <span class="me-2" v-else>Carica i dati completi</span>
                        <span class="spinner-border spinner-border-sm" v-show="isLoadingData"></span>
                    </button>
                </div>
            </div>
        </div>
    </div>

    <router-view style="padding-top: 65px"></router-view>
</template>

<style scoped>
body {
    font-family: Arial, Helvetica, sans-serif;
}
</style>
