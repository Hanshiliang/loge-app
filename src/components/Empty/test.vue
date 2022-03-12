<template>
  <div class="test-container">
      <Empty ></Empty>
  </div>
</template>

<script>
import Empty from "./"
export default {
components:{
    Empty
}
}
</script>

<style scoped>
 .test-container{
        height:400px;
        width:400px;
        border:solid red 1px;
        margin:0 auto;
        position:relative;
    }
</style>