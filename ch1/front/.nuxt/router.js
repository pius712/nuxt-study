import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0d7ccca0 = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _440803e1 = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _1afff947 = () => interopDefault(import('../pages/users/pius.vue' /* webpackChunkName: "pages/users/pius" */))
const _78242c19 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/profile",
    component: _0d7ccca0,
    name: "profile"
  }, {
    path: "/signup",
    component: _440803e1,
    name: "signup"
  }, {
    path: "/users/pius",
    component: _1afff947,
    name: "users-pius"
  }, {
    path: "/",
    component: _78242c19,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
