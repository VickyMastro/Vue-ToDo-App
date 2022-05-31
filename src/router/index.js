import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// Notas y ToDos
import Notes from '../views/Notes.vue'
import ToDos from '../views/ToDos.vue'
// userForm se va, voy a usas CreateUser y loginUser
import CreateUser from '../components/user/CreateUser.vue'
import LoginUser from '../components/user/LoginUser.vue'
import index from '../components/user/index.vue'
import store from '../store/index'

Vue.use(VueRouter)

const checkUser = (async (to, from, next) => {
  /* Si requiere auth y no esta logueado */
  if (await store.dispatch("getCurrentUser")) {
    next(); 
  }
  else {
    next({name: 'Login'});
  }
});

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: checkUser,
  },
  {
    path: '/notes',
    name: 'Notes',
    component: Notes,
    beforeEnter: checkUser,
  },
  {
    path: '/toDos',
    name: 'ToDos',
    component: ToDos,
    beforeEnter: checkUser,
  },
  {
    path: '/user',
    component: index,
    redirect: '/user/Login',
    children:[
      {
      path: 'createUser',
      name: 'User',
      component: CreateUser
    },
    {
      path: 'Login',
      name: 'Login',
      component: LoginUser
    }
    ]
  },
  {
    path: '*',
    redirect: '/'
  },
]

const mode= 'history'

const router = new VueRouter({
  routes,
  mode
})

export default router
