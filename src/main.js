import './assets/base.css'
import './assets/main.css'

import App from './App.vue'
import VeeValidatePlugin from './includes/validation'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VeeValidatePlugin, { foo: 100 })

app.mount('#app')
