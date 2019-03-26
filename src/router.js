import Vue from 'vue'
import Router from 'vue-router'
import Tasks from './components/task.vue'
import About from  './components/about.vue'

Vue.use(Router)

export default new Router({
     routes:[
         {
            path: '/',
            name: 'tasks',
            component: Tasks
         },
         {
             path: '/about',
             name: 'about',
             component: About
         }
     ]
 })