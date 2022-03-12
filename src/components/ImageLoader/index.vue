<template>
  <div class="image-loader-container">
     <img v-if="!everythingDone" class="placeholder" :src="placeholder" alt=""
     
     />
     <img  @load="handleLoad" class="origen" :src="src"
     :style="{opacity:originOpacity,transition:`${duration}ms`}"
      />
  </div>

</template>

<script>
export default {
    props:{
        src:{
            type:String,
            required:true
        },
        placeholder:{
            type:String,
            required:true
        },
        duration:{
            type:Number,
            default:5000
        }
    },
    data(){
        return{
            originLoad:false,//原图是否加载完成
            everythingDone:false//一切都完成了
        }
    },
    computed:{
        originOpacity(){
            return this.originLoad?1:0;
        }
    },
    methods:{
        handleLoad(){
            this.originLoad=true;
            setTimeout(() => {
                this.everythingDone=true;
            }, this.duration);
           // console.log("原图加载完成啦")
            this.$emit("load")
            
        }
    }
}
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
    .image-loader-container{
        width:100%;
        height:100%;
        position:absolute;
        overflow: hidden;
        img{
            .self-fill();
            object-fit: cover;
           
        }
         /* .origen{
                opacity: 0;
            } */
            .placeholder{
                filter: blur(0.2vw);
            }
    }
</style>

<style lang="less" scoped>
@import url("~@/styles/mixin.less");
    .image-loader-container{
        height: 100%;
        width:100%;
        position: relative;
        overflow: hidden;
        img{
            .self-fill();
            object-fit: cover;//图片比例
        }
       
        .placeholder{
            filter: blur(2vm);
        }
    }
</style>