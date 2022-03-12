<template>
  <div class="about-container" v-loading="loading ||!srcLoad">
    <iframe
     v-if="src"
     class="about-content"
     :src="src"frameborder="0"
     @load="srcLoad=true"
      >

    </iframe>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
  data(){
    return{
      srcLoad:false
    }
  },
  computed:mapState("about",{
    src:"data",
    loading:"loading"
  }),
  created(){
    this.$store.dispatch("about/fetchAbout")
  }
}
</script>

<style lang="less" scoped>
.about-container{
  width:100%;
  height:100%;
  overflow: hidden;
  position: relative;
}
.about-content{
  width:100%;
  height:100%;
  display: block;
  box-sizing: border-box;
}

</style>