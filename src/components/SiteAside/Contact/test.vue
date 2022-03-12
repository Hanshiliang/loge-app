<template>
  <div class="test-container">
      <Contact></Contact>
  </div>
</template>

<script>
import Contact from "./"
export default {
    components:{
        Contact
    }
}
</script>

<style scoped>
    .test-container{
       height:400px;
    width:400px;
    background: black;
    margin:0 auto;
    padding-top: 200px;
    position:relative;
    }
</style>