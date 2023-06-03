import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Home from './views/Home.vue'
import Blog from './views/Blog.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/:name', component: Blog }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')
