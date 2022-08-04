<script setup lang="ts">

</script>

<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <div class="collapse navbar-collapse">
        <div class="navbar-nav">
          <router-link to="/" class="navbar-brand">Calcolatore</router-link>
          <router-link to="/naval" class="navbar-brand">Calcolatore Navale</router-link>
        </div>
      </div>
    </div>

  </nav>

  <router-view></router-view>
</template>

<style></style>
