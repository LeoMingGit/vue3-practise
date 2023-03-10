import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import Router from './tools/Router'
import Store from './tools/Storage'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app=createApp(App);
app.use(ElementPlus)
app.use(Router)
app.use(Store)
app.mount('#app')
