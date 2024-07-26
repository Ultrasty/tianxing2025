import { createApp } from 'vue'
import './style.less'
import App from './App.vue'
import router from './router'
import 'element-plus/dist/index.css'

import './mock' //使用旧项目的mock

createApp(App)
    .use(router)
    .mount('#app')
