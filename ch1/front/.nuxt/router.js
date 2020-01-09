import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _513c03ec = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _9b8d3bb6 = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _3910958b = () => interopDefault(import('../pages/users/pius.vue' /* webpackChunkName: "pages/users/pius" */))
const _62ebf555 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _513c03ec,
    name: "profile"
  }, {
    path: "/signup",
    component: _9b8d3bb6,
    name: "signup"
  }, {
    path: "/users/pius",
    component: _3910958b,
    name: "users-pius"
  }, {
    path: "/",
    component: _62ebf555,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
