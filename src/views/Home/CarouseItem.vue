<template>
  <div class="carousel-itme-container"
  @mousemove="handleMouseMove" 
  @mouseleave="handleMouseLeave"
  ref="container">
    <div class="carousel-img" :style="imagePosition" ref="image">
<ImageLoader 
@load="this.showWords"
:src="carousel.bigImg" :placeholder="carousel.midImg">

    </ImageLoader>
    </div>
    <div class="title" ref="title">{{carousel.title}}</div>
    <div class="desc" ref="desc">{{carousel.description}}</div>
  </div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  props:["carousel"],
  components:{
    ImageLoader,
  },
  data(){
    return{
      titleWidth:0,
      descWidth:0,
      containerSize:null,//外出容器的尺寸
      innerSize:null,//内层容器尺寸
      mouseX:0,//鼠标的横坐标
      mouseY:0,//鼠标的纵坐标
    }   
}, 
  computed:{
     imagePosition(){
      if(!this.innerSize || !this.containerSize){
        return;
      } 
      const extraWidth=this.innerSize.width-this.containerSize.width;//多出的宽度
      const extraHeight=this.containerSize.height-this.containerSize.height;
      //console.log(extraWidth,extraHeight)
     const left=(-extraWidth/this.containerSize.width)*this.mouseX;
      const top=(-extraHeight/this.containerSize.height)*this.mouseY
      //得到图片坐标
      return{
        transform:`translate(${left}px,${top}px)`
        } ; 
       
    },
     center(){
         return{
            x:this.containerSize.width/2,
           y:this.containerSize.height/2,
         }     
      }
  },
 mounted(){
      this.titleWidth=this.$refs.title.clientWidth;
      this.descWidth=this.$refs.desc.clientWidth;
      //console.log( this.titleWidth,this.descWidth)
      // this.showWords()
      this.setSize();
      this.mouseX=this.center.x,
      this.mouseY=this.center.y
      window.addEventListener("resize",this.setSize)
    },
    destroyed(){
      window.removeEventListener("resize",this.setSize)
    },
    methods:{
     showWords(){
        this.$refs.title.style.opacity=1;
        this.$refs.title.style.width=0;
        //让浏览器强制渲染一次
        this.$refs.title.clientWidth;//
        this.$refs.title.style.transition="1s";
        this.$refs.title.style.width=this.titleWidth+"px";

        this.$refs.desc.style.opacity=1;
        this.$refs.desc.style.width=0;
        //让浏览器强制渲染一次
        this.$refs.desc.clientWidth;//
        this.$refs.desc.style.transition="2s 1s";
        this.$refs.desc.style.width=this.descWidth+"px";
       },
       setSize(){
          this.containerSize={
        width:this.$refs.container.clientWidth,
        height:this.$refs.container.clientHeight,
      }
       this.innerSize={
        width:this.$refs.image.clientWidth,
        height:this.$refs.image.clientHeight,
      }
      // console.log(this.containerSize,this.innerSize)
     },
     handleMouseMove(e){
       
       const rect=this.$refs.container.getBoundingClientRect();//矩形大小
        this.mouseX=e.clientX-rect.left;
        this.mouseY=e.clientY-rect.top;     
       //console.log(this.mouseX,this.mouseY)
     },
     handleMouseLeave(){
       this.mouseX=this.center.x;
       this.mouseY=this.center.y;
     } 
    }

}

</script>
  
<style lang="less" scoped>
  @import "~@/styles/var.less";
.carousel-itme-container{
  background: @dark;
  width:100%;
  height:100%;
  color:#fff;
  position:relative;
  overflow: hidden;
}
.carousel-img{
  height: 110%;
  width:110%;
  position: absolute;
 /*  z-index: -1; */
  transition: 0.2s;
  left:0;
  top:0;
}
.title ,.desc{
  position:absolute;
  color: #fff;
  left: 30px;
  letter-spacing: 3px;
  text-shadow: 1px 0 0 rgba(0,0,0,0.5),
                -1px 0 0 rgba(0,0,0,0.5), 
                0 1px 0 rgba(0,0,0,0.5),
                0 -1px 0 rgba(0,0,0,0.5);
  white-space: nowrap;
  overflow: hidden;
  opacity: 0;
}
.title{
  top:40%;
  font-size: 2em;
}
.desc{
  top:calc(48%);
  font-size: 1.2em;
}
</style>