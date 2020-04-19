import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = ()=> import('../views/home/Home')
const Find = ()=> import('../views/find/Find')
const Main = ()=> import('../views/Main')
const FindSongDetail = ()=> import('views/find/findChild/findDetail/FindSongDetail')
const Song = ()=> import('components/common/Song')
Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:'/find'
  },
  {
    path:"/find",
    component:Main,
    children:[{
      path:"/find",
      component:Find
    },
  {
    path:'/song',
    name:'song',
    component:Song
  },
  {
    path:"/home",
    component:Home
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