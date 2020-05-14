import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = ()=> import('../views/home/Home')
const Find = ()=> import('../views/find/Find')
const Main = ()=> import('../views/Main')
const FindSongDetail = ()=> import('views/find/findChild/findDetail/FindSongDetail')
const Charts = ()=> import('views/find/findChild/iconChild/Charts')
const Song = ()=> import('components/common/Song')
const Swipers  = ()=> import ('components/content/swiper.vue')
Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:'/find'
  },
  {
    path:"/find",
    component:Main,
    children:[
  {
      path:"/find",
      component:Swipers
  },
  {
    path:'/songsdetail',
    name:'songsdetail',
    component:Song
  },
  {
    path:'/charts',
    name:'charts',
    component:Charts
  },
  {
    path:"/home",
    component:Swipers
  }
  ]
  },
  {
    path:'/detail/:id',
    component:FindSongDetail
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