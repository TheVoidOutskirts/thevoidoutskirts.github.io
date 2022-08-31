import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

// todo change page title https://stackoverflow.com/a/51640162/3560579
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: {name: 'home'}
        },
        {
            path: '/enigma-calculator/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/enigma-calculator/calculator',
            name: 'calculator',
            component: () => import('../views/CalculatorView.vue')
        },
        {
            path: '/enigma-calculator/naval',
            name: 'navalCalculator',
            component: () => import('../views/NavalCalculatorView.vue')
        },
        {
            path: '/enigma-calculator/units',
            name: 'unitViewer',
            component: () => import('../views/UnitViewerView.vue')
        },
        {
            path: '/enigma-calculator/history',
            name: 'history',
            component: () => import('../views/HistoryView.vue')
        },
        {
            path: '/enigma-calculator/places',
            name: 'places',
            component: () => import('../views/PlacesView.vue')
        },
        {
            path: '/enigma-calculator/factions',
            name: 'factions',
            component: () => import('../views/FactionsView.vue')
        },
        {
            path: '/enigma-calculator/maps',
            name: 'maps',
            component: () => import('../views/MapsView.vue')
        },
        {
            path: '/enigma-calculator/rules',
            name: 'rules',
            component: () => import('../views/RulesView.vue')
        }

    ]
})

export default router
