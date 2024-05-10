import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { createI18n } from 'vue-i18n'
import messages from './lang/index'

const i18n = createI18n({
  legacy: false,
  locale: 'KO',
  fallbackLocale: 'EN',
  messages: messages
})

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(i18n)

app.mount('#app')
