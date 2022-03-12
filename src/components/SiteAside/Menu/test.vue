<template>
  <div class="test-container">
      <Menu></Menu>
  </div>
</template>

<script>
import  Menu from "./";
export default {
    components:{
        Menu
    }
}
</script>

<style scoped>
    .test-container{
        height: 600px;;
        width:400px;
        background-color: black;
        margin: 0 auto;
        position: relative;
    }
</style>