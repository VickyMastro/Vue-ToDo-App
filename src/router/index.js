import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// Notas y ToDos
import Notes from '../views/Notes.vue'
import ToDos from '../views/ToDos.vue'
// userForm se va, voy a usas CreateUser y loginUser
import UserForm from '../components/user/UserForm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/notes',
    name: 'Notes',
    component: Notes
  },
  {
    path: '/toDos',
    name: 'ToDos',
    component: ToDos
  },
  {
    path: '/user',
    name: 'User',
    component: UserForm
  },
  {
    path: '*',
    redirect: '/'
  },
]

const router = new VueRouter({
  routes
})

export default router
