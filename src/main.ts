import {createApp} from 'vue'
import {createPinia} from 'pinia'
import router from './router'

import {Chart as ChartJS, registerables} from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';

import vSelect from "vue-select";
import 'vue-select/dist/vue-select.css';

import 'bootstrap/scss/bootstrap.scss'
// import * as bootstrap from 'bootstrap'

import App from './App.vue'

ChartJS.register(...registerables, ChartDataLabels)

const app = createApp(App)

app.use(createPinia())
app.use(router)

// https://vuejs.org/guide/components/registration.html
app.component('v-select', vSelect)

app.mount('#app')
