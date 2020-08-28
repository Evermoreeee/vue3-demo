import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaseComponents from './components/base'
import BaseDirective from './directive'

const app = createApp(App)

app.use(BaseComponents)
app.use(BaseDirective)

app.use(store).use(router).mount('#app')
