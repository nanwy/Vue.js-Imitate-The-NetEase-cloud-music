import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = ()=> import('../views/home/Home')
const Find = ()=> import('../views/find/Find')
const FindSongDetail = ()=> import('views/find/findChild/findDetail/FindSongDetail')
const Song = ()=> import('components/common/Song')
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
    component:Find,
  },
  {
    path:'/detail/:id',
    component:FindSongDetail
  },
  {
    path:'/song',
    name:'song',
    component:Song
  }
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