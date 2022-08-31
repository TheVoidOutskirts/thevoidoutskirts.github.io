import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

// todo change page title https://stackoverflow.com/a/51640162/3560579
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/calculator',
            name: 'calculator',
            component: () => import('../views/CalculatorView.vue')
        },
        {
            path: '/naval',
            name: 'navalCalculator',
            component: () => import('../views/NavalCalculatorView.vue')
        },
        {
            path: '/units',
            name: 'unitViewer',
            component: () => import('../views/UnitViewerView.vue')
        },
        {
            path: '/history',
            name: 'historyViewer',
            component: () => import('../views/HistoryView.vue')
        }
    ]
})

export default router
