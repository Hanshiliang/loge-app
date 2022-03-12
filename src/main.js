import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./styles/global.less";
import "./mock";
import "./eventBus"
store.dispatch("setting/fetchSetting")


import showMessage from './utils/showMessage';
Vue.prototype.$showMessage=showMessage;
//window.showMessage=showMessage;

//注册全局指令
import vLoading from "./directives/loading"
import vLazy from "./directives/lazy"
Vue.directive("loading",vLoading)
Vue.directive("lazy",vLazy)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

//import * as blogApi from "./api/blog";
//获取博客分类
/* blogApi.getBlogTypes().then((r)=>{
  console.log("博客分类",r)
}) 

//获取博客分类
 blogApi.getBlogs(2,20,3).then((r)=>{
  console.log("boke",r)
}) 

blogApi.getBlog("df").then((r)=>{
  console.log(r)
})
blogApi.postComment({
  nickname:"昵称",
  content:"评论内容",
  blogId:123
}).then((r)=>{
  console.log(r)
})
blogApi.getComments("23").then((r)=>{
  console.log(r)
})
import { getSetting } from './api/setting';
getSetting().then((r)=>{
  console.log(r)
})*/
