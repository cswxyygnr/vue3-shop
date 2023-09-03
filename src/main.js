import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
//引入默认样式
import '@/styles/common.scss'
// import {getCategory} from '@/apis/Layout.js'
//引入全局指令
import { lazyPlugin } from './directives'
import {componentPlugin} from '@/components/index.js'

// const res = getCategory()
// console.log(res)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')

