import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const GStore = reactive({ flashMessage: '' })

createApp(App)
  .use(store)
  .use(router)
  // GStore qo'shish uchun
  .provide('GStore', GStore)
  .mount('#app')
