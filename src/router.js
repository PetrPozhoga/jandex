import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)

const router = new Router({ mode: 'history' })

router.beforeEach((to, from, next) => {
  store.dispatch('getYandexApi', to.path)
  next()
})

export default router
