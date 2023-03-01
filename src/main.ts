import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

const messages = {
    en: {
        hello: 'Hello'
    },
    km: {
        hello: 'ជំរាបសួរ'
    }
}

// const messages = import(`./locales/km.json`);
const i18n = createI18n({
    locale: 'en', //Get Data From seleted
    fallbackLocale: 'en',
    messages
})

createApp(App).use(ElementPlus).use(i18n).use(router).use(createPinia()).mount('#app')
