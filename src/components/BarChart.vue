<template>
  <canvas ref="chartDOMElement"></canvas>
</template>

<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import {Chart as ChartJS} from "chart.js";

const props = defineProps<{
  data: number[] | undefined,
  title: string,
  chartHeight?: number
}>()

const chartDOMElement = ref<HTMLCanvasElement | undefined>(undefined)

let chartJs: ChartJS | undefined = undefined

onMounted(() => {
  if (chartDOMElement.value === undefined) {
    return
  }

  const internalHeight = (props.chartHeight === undefined) ? 100 : Math.max(100, props.chartHeight)

  chartJs = new ChartJS(chartDOMElement.value, {
    type: 'bar',

    data: {
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
      datasets: [{
        data: [],
        label: props.title,
        backgroundColor: [
          'rgba(54, 162, 235, 0.8)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1
      }]
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
    chartJs.data.datasets[0].data = props.data ?? []
    chartJs.update()
  }
});
</script>
