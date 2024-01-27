// icons
import '@mdi/font/css/materialdesignicons.css' 

import { createApp } from 'vue'
import App from './App.vue'

// vue router
import router from './router'

// Pinia
import { createPinia } from 'pinia'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  theme:{
    defaultTheme:'dark'
  },
  components,
  directives,
})

// const app = createApp(ContadorApioptions)
const app = createApp(App)
app.use(vuetify);
app.use(createPinia())
app.use(router);
app.mount('#app')
