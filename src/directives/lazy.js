import eventBus from "@/eventBus"
import {deBounce} from "@/utils"
import defaultGif from "@/assets/loading.svg"

let imgs=[];
function setImage(img){
    //处理图片
    //该图片是否在视口范围内
    const rect=img.dom.getBoundingClientRect();
    const clientHeight=document.documentElement.clientHeight;
    const height=rect.height||150;
    img.dom.src=defaultGif//暂时使用默认图片
    if(rect.top>=-height||rect.top<=clientHeight){
        //在视口范围内
        const tempImg=new Image();
        tempImg.onload=function(){
            //当真实图片加载完成之后
            img.dom.sec=img.src;
        }
        img.dom.src=img.src
        imgs=imgs.filter((i)=>{i!==img})
       // console.log("不在视口范围内",img.src)
    }
   // 
}
//希望调用该函数就可以设置合适的图片
 function setImages(){
     //console.log("images")
     for(const img of imgs){
         //处理图片
         setImage(img)
     }
 }

 function handleScroll(dom){
     setImages()
 }
 
 eventBus.$on("mainScroll",deBounce(handleScroll,50))
export default {
    inserted(el,bindings){
        const img={
            dom:el,
            src:bindings.value,
           // handled:false
        }
        imgs.push(img)
        //立即处理它
        setImage(img)
    },
    
    unbind(el){
      imgs = imgs.filter((img)=>img.dom!==el) 
    }
}