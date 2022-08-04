<script setup lang="ts">

</script>

<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Home</router-link>
      <div class="collapse navbar-collapse">
        <div class="navbar-nav">
          <router-link to="/calculator" class="nav-link">Calcolatore</router-link>
          <router-link to="/naval" class="nav-link">Calcolatore Navale</router-link>
        </div>
      </div>
    </div>
  </nav>

  <router-view></router-view>
</template>

<style></style>
