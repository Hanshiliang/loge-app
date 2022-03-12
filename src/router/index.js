import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import Blog from '../views/Blog';
import Message from '../views/Message'
import Project from '../views/Project'
import BlogDetail from "../views/Blog/Detail"
import {titleController} from "@/utils"

if(!window.VueRouter){
  Vue.use(VueRouter)
}


const routes = [
  {
    path:"/",
    name: 'Home',
    component:()=>import("@/views/Home"),
    meta:{
      title:"首页"
    }
  },
  {
    path:"/about",
    name: 'About',
    component:()=>import("@/views/About"),
    meta:{
      title:"关于我"
    }
  },
  {
    path:"/blog",
    name: 'Blog',
    component: ()=>import("@/views/Blog"),
    meta:{
      title:"文章"
    }
  },
  {
    path:"/blog/cate/:categoryId",
    name: 'CategoryBlog',
    component: ()=>import("../views/Blog"),
    meta:{
      title:"文章"
    }
  },
  {
    path:"/blog/:id",
    name: 'BlogDetail',
    component: ()=>import("../views/Blog/Detail"),
    meta:{
      title:"文章详情"
    }
  },
  {
    path:"/message",
    name: 'Message',
    component: ()=>import("@/views/Message"),
    meta:{
      title:"留言板"
    }
  },
  {
   path:"/project",
    name: 'Project',
    component: ()=>import("@/views/Project"),
    meta:{
      title:"项目&效果"
    }
  },
]

const router = new VueRouter({
  mode: 'history',//路由模式
  //base: process.env.BASE_URL,
  routes
})
  router.afterEach((to,from)=>{
   if(to.meta.title){
      titleController.setRouteTitle(to.meta.title)
   }
   
  })
export default router
