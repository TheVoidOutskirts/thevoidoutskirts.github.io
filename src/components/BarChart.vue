<template>
  <canvas ref="chartDOMElement"></canvas>
</template>

<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import {Chart as ChartJS, registerables} from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(...registerables, ChartDataLabels)

const props = defineProps<{
  data: number[] | undefined,
  title: string,
}>()

const chartDOMElement = ref<HTMLCanvasElement | undefined>(undefined)

let chartJs: ChartJS | undefined = undefined

const update = () => {
}

onMounted(() => {
  if (chartDOMElement.value === undefined) {
    return
  }
  chartJs = new ChartJS(chartDOMElement.value, {
    type: 'bar',
    data: {
      labels: [],
      datasets: [{
        data: [],
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
      }
    }
  })
})
watch(props, () => {
  console.log(props.title, props.data)
  if(chartJs !== undefined) {
    chartJs.data.labels = (props.data ?? []).map((_,i) => i + 1)
    chartJs.data.datasets[0].data = props.data ?? []
    chartJs.update()
  }
  update()
});
</script>
