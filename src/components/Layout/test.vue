<template>
  <div class="test-container">
      <Layout>
         <template #left>
              <div class="left"> 左边区域</div>
         </template>
          <template >
            <div class="main">中间区域</div>
          </template>
         <!-- <template #right>
              <div class="right">右边区域</div>
         </template> -->
      </Layout>
  </div>
</template>

<script>
import Layout from "./";
export default {
    components:{
        Layout,
    }
}
</script>

<style scoped>
 .test-container{
     height: 600px;
     width:80%;
     border:solid 1px red;
     margin: 0 auto;
     
 }