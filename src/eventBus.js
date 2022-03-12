import Vue from "vue";
/**
 * 事件名mainScroll
 * 如果是underfind表示do不存在了
 * 含义:主区域滚动条位置变化后触发
 * 
 * setMainScroll
 * 当需要设置珠区域滚动条位置时候触发
 * 参数
 * 滚动高度
 */
const app=new Vue({})
Vue.prototype.$bus=app
export default app