import { createApp } from 'vue'
import './assets/poppins.css'
import './style.css'
import App from './App.vue'

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { md3 } from "vuetify/blueprints";

const vuetify = createVuetify({
    components,
    directives,
    blueprint: md3,
    // theme: {
    //     defaultTheme: 'light',
    // }
})

import { createPinia } from 'pinia'
import router from "./router/index.js";

const pinia = createPinia()

const app = createApp(App)
app.use(vuetify)
app.use(pinia)

app.use(router)

app.mount('#app')
