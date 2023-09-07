// 預設css樣式
import './assets/main.css'
import { createApp } from 'vue'
import { createRouter,createWebHashHistory,createWebHistory} from "vue-router"
// https://router.vuejs.org/zh/guide/
import Entry from './Entry.vue'
import App from '@/pages/App.vue'
import About from '@/pages/About.vue'

// console.log(createRouter)可以印出來看是否有完整

// 定義路徑（路徑）
const matchedRoute = [
  { path: '/', component: App }, 
  { path: '/about', component: About },
]
// 建立（路由）
const appRouter = createRouter({
  history: createWebHashHistory(), //createWebHashHistory（假的引擎處理）, createWebHistory （會有存在的頁面）
  routes:matchedRoute, 
})


const app = createApp(Entry)
app.use(appRouter)
app.mount('#app')

// 原本只有app
// createApp(App).mount('#app')
