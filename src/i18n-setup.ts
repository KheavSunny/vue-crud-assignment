import { nextTick } from 'vue'
import { createI18n } from "vue-i18n"

const locale = sessionStorage.getItem('lang') || 'en'

export function setupI18n(options = { locale: locale }) {
  const i18n = createI18n(options)
  loadLocaleMessages(i18n, locale)
  return i18n
}

async function loadLocaleMessages(i18n:any , locale:string) {
  const messages = await import(`./locales/${locale}.json`)
  i18n.global.setLocaleMessage(locale, messages.default)
  return nextTick()
}