// Vue
import {createApp} from 'vue'
import {createPinia} from 'pinia'
import router from './router'

// ChartJS
import {Chart as ChartJS, registerables} from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Vue Select
import vSelect from "vue-select";
import 'vue-select/dist/vue-select.css';

// EasyDataTable
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

// Bootstrap
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap-icons/font/bootstrap-icons.scss'

// Axios
import axios from "axios";
import VueAxios from "vue-axios";

// VueCookies
import VueCookies from "vue-cookies";

/* Setup */
import App from './App.vue'

// Done globally
ChartJS.register(...registerables, ChartDataLabels)

// App creation and plugin import
const app = createApp(App)

app.use(createPinia())
app.use(router)

// https://vuejs.org/guide/components/registration.html
app.component('v-select', vSelect)
app.component('EasyDataTable', Vue3EasyDataTable);
app.use(VueAxios, axios);
app.provide('axios', app.config.globalProperties.axios);
app.use(VueCookies, {expire: '12y'})

app.mount('#app')