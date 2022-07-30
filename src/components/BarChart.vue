<template>
  <canvas ref="chartDOMElement"></canvas>
</template>

<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import {Chart as ChartJS, ChartDataset} from "chart.js";

const props = defineProps<{
  data: ChartDataset<'bar', number[]>[],
}>()

const chartDOMElement = ref<HTMLCanvasElement | undefined>(undefined)

let chartJs: ChartJS | undefined = undefined

onMounted(() => {
  if (chartDOMElement.value === undefined) {
    return
  }

  chartJs = new ChartJS(chartDOMElement.value, {
    type: 'bar',
    data: {
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
      datasets: []
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          suggestedMax: 100,
          suggestedMin: 0,
        }
      },
      plugins: {
        datalabels: {
          anchor: 'end',
          align: 'end',
          offset: 2,
          color: '#000'
        }
      }
    }
  })
})

watch(() => props.data, () => {
  if (chartJs !== undefined) {
    chartJs.data.datasets = props.data
    chartJs.update('active')
  }
});
</script>
