<template>
  <div v-loading="loading" class="home-container" ref=container @wheel="handleWheel" @transitionend="transitionEnd">
    <ul class="carousel-container" :style="{marginTop}">
      <li v-for="item in data" :key="item.id">
        <CarouseItem :carousel="item"></CarouseItem>
      </li>
    </ul>
  
  <div v-show="index>=1" @click="switchTo(index-1)" class="icon icon-up">
    <Icon type="arrowUp"></Icon>
  </div>
  <div v-show="index<data.length-1" @click="switchTo(index+1)" class="icon icon-down">
    <Icon type="arrowDown"></Icon>
  </div>
  <ul class="indicator">
    <li @click="switchTo(i)" :class="{active:i===index}" v-for="(item ,i) in data" :key="item.id"></li>
  </ul>
  
  </div>
</template>
<style scoped lang="less">
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";

  .home-container{
    height:100%;
    width:100%;
   position: relative;
   //background:@dark;
   overflow: hidden;
    //测试
  //  width:60%;
  //  height:30%;
   overflow: visible;
   //border:solid red 2px;
   margin: 0 auto; 
    ul{
       margin:0;
       list-style: none;
       padding:0;
    }
    .carousel-container{
    height: 100%;
    width:100%;
    li{
      height:100%;
      width:100%
    }
    }
    }
    .icon{
      .self-center();
      font-size: 30px;
      color: @gray;
      cursor: pointer;
      transform: translate(-50%);
      &.icon-up{
        top:20px;
        animation: jump-up 2s infinite;
      }
      &.icon-down{
        top:auto;
        bottom: 20px;
        animation: jump-down 2s infinite;
      }
    }
    .indicator{
      .self-center();
      transform: translateY(-50%);
      left:auto;
      right:20px;
      li{
      height:7px;
      width:7px;
      border-radius: 50%;
      background: @words;
      cursor: pointer;
      margin-bottom: 10px;
      border: 1px solid #FFF;
      box-sizing: border-box;
      
      }
      .active{
        background: #fff;
    }
    }
    
    @keyframes jump-up {
      0%{
        transform: translate(-50%,5px);
      }
      50%{
        transform: translate(-50%,-5px);
      }
      100%{
        transform: translate(-50%,5px);
      }
    }
    @keyframes jump-down {
      0%{
        transform: translate(-50%,-5px);
      }
      50%{
        transform: translate(-50%,5px);
      }
      100%{
        transform: translate(-50%,-5px);
      }
    }
  
</style>
<script>
  //import {getBanners} from "@/api/banner";
  import CarouseItem from "./CarouseItem";
  import Icon from "@/components/Icon";
  import {mapState} from "vuex"
  //import fetchData from "@/mixins/fetchData.js";
  
   export default{
     //mixins:[fetchData([])],
     components:{
       CarouseItem,
       Icon,
    
     },
     data(){
       return{
        // banners:[],
         index:0,
         containerHeight:0,
         switching:false,
         //isLoading:true
       }
     },
   /*  async created(){
      this.banners=await getBanners()
     this.isLoading=false;
    }, */
    created(){
      this.$store.dispatch("banner/fetchBanner")
    },
    mounted(){
      this.containerHeight=this.$refs.container.clientHeight;
      window.addEventListener("resize",this.handleResize)
      
   },
    destroyed(){
      window.removeEventListener("resize",this.handleResize)
    },
    computed:{
      marginTop(){
        return -this.index*this.containerHeight+ "px"
      },
      ...mapState("banner",["loading","data"])
    },
    methods:{
     /*  async fetchData(){
        return await getBanners();
      }, */
      //切换轮播图
      switchTo(i){
        this.index=i;
      },
      handleWheel(e){
       if(this.swtching){
          return
        }
        if(e.deltaY<-5 && this.index>0){
          //往上滚动
          this.switching=true;
          this.index--;
        }else if(e.deltaY>5&&this.index<this.data.length-1){
          //往下滚动
          this.swtching=false;
          this.index++;
        }
        //console.log(e)
      },
       transitionEnd(){
            this.switching=false
      },
      //浏览器窗口改变
      handleResize(){
        this.containerHeight=this.$refs.container.clientHeight;
      }
    }
   } 
</script>

