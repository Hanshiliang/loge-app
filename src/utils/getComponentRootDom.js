import Vue from "vue";

/**
 * 获取某个组价渲染的根元素
 * @param {*} comp 组件名字
 * @param {*} props 属性
 */
export default function(comp,props){
    const vm =new Vue({
        render:h=>h(comp,{props})
    })
    vm.$mount();
    return vm.$el;
}