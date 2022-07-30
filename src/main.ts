import {createApp} from 'vue'
import {createPinia} from 'pinia'

import {Chart as ChartJS, registerables} from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';

import 'bootstrap/scss/bootstrap.scss'
import App from './App.vue'

import router from './router'

ChartJS.register(...registerables, ChartDataLabels)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
