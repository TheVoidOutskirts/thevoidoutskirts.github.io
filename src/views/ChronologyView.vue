<template>
  <!-- https://bootsnipp.com/snippets/xrKXW -->
  <div class="col-md-10 offset-md-1">
    <h4>Cronologia completa (?)</h4>
    <ul class="timeline">
      <li v-for="(day, key) in Chrono" :key="key">
        <h4>{{ `${day.when.day}-${day.when.month}-${day.when.year}` }}</h4>
        <div v-for="(event, key2) in day.events" :key="key2">
          <h5 v-if="day.events.length > 1">Record {{ key2 + 1 }}</h5>
          <div v-html="marked.parse(event.what)"></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import {useDataStore} from "@/stores/data";
import {marked} from "marked";
import type {Giorno} from "@/assets/Types";

const store = useDataStore();

const Chrono = ref<Giorno[]>([]);

// Fix for loading because I don't know how to get a ref from a store getter... todo find better way
watch(() => store.isDataLoaded, loadData)
// Mounted needed to load data for the first time
onMounted(loadData)

function loadData() {
  Chrono.value = store.getCronologia.filter(giorno => giorno.events.length > 0);
}
</script>

<style scoped>
ul.timeline {
  list-style-type: none;
  position: relative;
}

ul.timeline:before {
  content: ' ';
  /*Riga verticale*/
  background: #D4D9DF;
  display: inline-block;
  position: absolute;
  left: 29px;
  width: 2px;
  height: 100%;
  z-index: 400;
}

ul.timeline > li {
  margin: 20px 0;
  padding-left: 20px;
}

ul.timeline > li:before {
  content: ' ';
  background: #212529;
  display: inline-block;
  position: absolute;
  border-radius: 50%;
  border: 3px solid #22E82C;
  left: 20px;
  width: 20px;
  height: 20px;
  z-index: 400;
}
</style>