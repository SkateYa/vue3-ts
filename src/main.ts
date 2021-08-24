// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router/index'
// import { key, store } from './store'
// import ElementPlus from 'element-plus'
// import 'element-plus/lib/theme-chalk/index.css'

// const app = createApp(App)
// app.use(router).use(store).use(ElementPlus).mount('#app');


import { createApp } from 'vue'
import importUiFramework from './utils/import-ui-framework'
import router from './router/index'
import { key, store } from './store'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import '@/style/basic.styl'

// const app = createApp(App)
// importUiFramework(app).use(router).use(ElementPlus).use(store, key).mount('#app')

createApp(App).use(router).use(ElementPlus).use(store, key).mount('#app')