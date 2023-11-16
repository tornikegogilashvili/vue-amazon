import { createI18n } from 'vue-i18n'
import messages from  '@/locales/locales'


const i18n = createI18n({

    locale: 'ge' || 'en',
    fallbackLocale:'ge' || 'en',
    messages: messages  


})

export default i18n