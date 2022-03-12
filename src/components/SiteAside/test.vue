<template>
  <div class="test-container">
      <SiteAside></SiteAside>
  </div>
</template>

<script>
import SiteAside from "./";
export default {
    components:{
        SiteAside
    }
}
</script>

<style scoped>
    .test-container{
        height:800px;
        width:250px;
        border:solid red 1px;
        margin:0 auto;
    }
</style>