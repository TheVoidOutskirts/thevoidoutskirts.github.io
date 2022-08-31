<script setup lang="ts">
</script>

<template>
  <video autoplay muted loop id="myVideo">
    <source src="public/portale.webm" type="video/webm">
    Your browser does not support HTML5 video.
  </video>
</template>

<style scoped>
#myVideo {
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -100;
}
</style>
