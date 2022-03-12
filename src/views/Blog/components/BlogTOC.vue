<template>
  <div class="blog-toc-container">
      <h2>目录</h2>
        <RightList :list="tocWithSelect" @select="handleSelect"></RightList>
  </div>
</template>

<script>
import RightList from "./RightList"
import deBounce from "@/utils/deBounce"
export default {
    components:{
        RightList
    },
    props:{
        toc:Array
    },
    data(){
      return{
        activeAnchor:"article-md-title-1"
      }
    },
    methods:{
        handleSelect(item){
            location.hash=item.anchor
        },
        //设置activeSelect为正确的值
        setSelect(scrollDom)
        {
          if(!scrollDom){
            return
          }
          this.activeAnchor="";//由于后续重新设置，先清空
          const range=200;
          for(const dom of this.doms){
            //看一下当前这个dom元素是不是被选中
            if(!dom){
              continue
            }
            //得到元素离视口顶端的距离
            const top=dom.getBoundingClientRect().top;
            if(top>=0&&top<=range){
              //在规定的范围内
              this.activeAnchor=dom.id;
              return;
            }else if(top>range){
              //在规定的范围下方
              return
            }else{
              //在规定的范围上方
               this.activeAnchor=dom.id;
            }
          }
        }
    },
    created(){
      this.setSelectDebounce=deBounce(this.setSelect,50)
     this.$bus.$on("mainScroll",this.setSelectDebounce)
    },
    destroyed(){
       this.$bus.$off("mainScroll",this.setSelectDebounce)
    },
    computed:{
      //根据TOC属性以及avtiveAnchor得到带有isSelect属性的toc数组
      tocWithSelect(){
        const getTOC=(toc=[])=>{
          return toc.map((t)=>({
            ...t,
            isSelect:t.anchor===this.activeAnchor,
            children:getTOC(t.children)
          }))
        }
        return getTOC(this.toc)
      },
      //根据toc得到他们对应的元素数组
     doms(){
        const doms=[];
       const addTocDoms=(toc)=>{
          for(const t of toc){
            
            doms.push(document.getElementById(t.anchor));
            if(t.children&&t.children.length){
              addTocDoms(t.children)
            }
          }
        };
        addTocDoms(this.toc);
        return doms;
      }
    }
}
</script>

<style lang="less" scoped>
.blog-toc-container{
  width:100%;
  box-sizing: border-box;
  padding:20px;
  position:relative;
  
  h2{
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>