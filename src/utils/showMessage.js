import getComponentRootDom from "./getComponentRootDom";
import Icon from "@/components/Icon";
import styles from "./showMessage.module.less"

/**
 * 弹出消息
 * @param {string} content 消息内容
 * @param {string} type 消息类型
 * @param {number} duration 消失时间
 * @param {htmlelment} container 容器
 */
export default function(content,type="info", duration=2000,container){
//创建消息元素
    const div=document.createElement("div");
    const iconDom=getComponentRootDom(Icon,{type})
    div.innerHTML=`<span class="${styles.icon}">${iconDom.outerHTML}</span><div>${content}</div>`
   
    const typeClassName=styles[`message-${type}`]//类型样式
    //设置样式
    div.className=`${styles.message} ${typeClassName}` ;
    //将div添加到容器中
       
        if(options.container){
            //容器的position是否改动过
            if(getComputedStyle(container).position==='static'){
                container.style.position="relative";
            }
        }  
        container.appendChild(div)

        //强行渲染一次
        div.clientHeight;

        //显示
        div.style.opacity=1
        div.style.transform=`translate(50%,50%)`

        //消失
        setTimeout(() => {
            div.style.opacity=0;
            div.style.transform=`translate(50%,50%) translateY(-35px)`
            div.addEventListener("transitionend",function(){
                div.remove();//移除div
                options.callback&&options.callback()
            },
            {once:true}
            )
        }, duration);
}