<script setup lang="ts">
import {useDataStore} from "@/stores/data";
import {useRouter} from "vue-router";
import {inject} from "vue";
import {VueCookies} from "vue-cookies";

const store = useDataStore();
const router = useRouter()
const cookies = inject<VueCookies>('$cookies') ?? (() => {
  throw new Error("Cookies library is not defined");
})();

function logout() {
  store.deleteData()
  cookies.remove("accessKey")
  router.replace("/")
}
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Home</router-link>
      <div class="collapse navbar-collapse">
        <div class="navbar-nav">
          <router-link to="/calculator" class="nav-link">Calcolatore</router-link>
          <router-link to="/unit-viewer" class="nav-link">Unit Viewer</router-link>
          <router-link to="/naval" class="nav-link">Calcolatore Navale</router-link>
        </div>
        <div class="navbar-nav ms-auto" v-show="store.isDataLoaded">
          <div class="nav-item">
            <a class="nav-link text-danger" href="" @click.prevent="logout">Logout</a>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <router-view></router-view>
</template>

<style></style>
