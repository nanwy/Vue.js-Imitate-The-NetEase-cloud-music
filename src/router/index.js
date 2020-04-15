import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = ()=> import('../views/home/Home')
const Find = ()=> import('../views/find/Find')
Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:'/find'
  },
  {
    path:"/home",
    component:Home
  },
  {
    path:"/find",
    component:Find
  },
]

const router = new VueRouter({
  
  mode:'history',
  routes}
  
)
export default router

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location){
  return originalPush.call(this,location).catch(err => err)
}