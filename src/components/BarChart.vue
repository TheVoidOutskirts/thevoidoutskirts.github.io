<template>
  <canvas ref="chartDOMElement"></canvas>
</template>

<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import type {ChartDataset} from "chart.js";
import {Chart as ChartJS} from "chart.js";

const props = defineProps<{
  data: ChartDataset<'bar', number[]>[],
}>()

const chartDOMElement = ref<HTMLCanvasElement | undefined>(undefined)

let chartJs: ChartJS | undefined = undefined

onMounted(() => {
  if (chartDOMElement.value === undefined) {
    return
  }
  //https://www.chartjs.org/docs/latest/axes/styling.html#grid-line-configuration
  const fontColor = '#E3E3E3';
  const gridColor = '#464646';

  chartJs = new ChartJS(chartDOMElement.value, {
    type: 'bar',
    data: {
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
      datasets: []
    },
    options: {
      color: fontColor,
      borderColor: gridColor,
      responsive: true,
      scales: {
        y: {
          ticks: {color: fontColor},
          beginAtZero: true,
          suggestedMax: 100,
          suggestedMin: 0,
          grid: {
            color: gridColor
          }
        },
        x: {
          ticks: {color: fontColor},
          grid: {
            color: gridColor
          }
        }
      },
      plugins: {
        datalabels: {
          anchor: 'end',
          align: 'end',
          offset: 2,
          color: fontColor
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
