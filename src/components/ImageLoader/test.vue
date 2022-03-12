<template>
    <div class="test-container">
         <ImageLoader 
   src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
      placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
      @load="handleLoaded" :duration="3000"
  ></ImageLoader>
    </div>
</template>

<script>
import ImageLoader from "./"
export default {
    components:{
        ImageLoader
    },
    methods:{
        handleLoaded(){
            console.log("图片加载完成")
        }
    }
}
</script>

<style scoped>
    .test-container{
        height: 400px;
        width:500px;
        border: black 1px solid;
        margin:0 auto;
    }
</style>