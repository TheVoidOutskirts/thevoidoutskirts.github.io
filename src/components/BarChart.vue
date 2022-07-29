<template>
  <canvas ref="chartDOMElement"></canvas>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {Chart as ChartJS, registerables} from "chart.js";

ChartJS.register(...registerables)

defineProps<{
  height: number,
  attackData: number[]
}>()

const chartDOMElement = ref<HTMLCanvasElement | null>(null)
let myChart: ChartJS | undefined = undefined;


onMounted(() => {
  if (!chartDOMElement.value) {
    return
  }

  myChart = new ChartJS(chartDOMElement.value, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [/*{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }*/]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
});
</script>

<style scoped>

</style>