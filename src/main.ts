import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import { setupI18n } from './i18n-setup'


createApp(App).use(ElementPlus).use(setupI18n()).use(router).use(createPinia()).mount('#app')
