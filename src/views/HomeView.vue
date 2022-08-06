<script setup lang="ts">
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

    <hr class="col-xs-12">
    <div class="form-floating">
      <input class="form-control" type="password" id="authKeyInput" placeholder="123">
      <label for="authKeyInput">Chiave di autenticazione</label>
      <div class="form-text">Solo Tom ce l'ha! 🤫</div>

    </div>
  </div>
</template>

<style scoped>
</style>
