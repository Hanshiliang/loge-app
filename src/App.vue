<template>
  <div class="app-container">
      <Layout>      
           <template #left>
             <div class="aside"> 
                 <SiteAside></SiteAside>
            </div>
         </template> 
      <template>
          
              <router-view></router-view>
          
      </template>
      </Layout>
      <ToTop></ToTop>
  </div>
</template>

<script>
import SiteAside from "./components/SiteAside";
import Layout from "./components/Layout"
import ToTop from './components/TopTop';
export default {
    components:{
        SiteAside,
        Layout,
        ToTop
    }
}
</script>

<style scoped lang="less">
@import url("~@/styles/mixin.less");
 .app-container{
     .self-fill(fixed);
 }
 .aside{
     height: 100%;
     width:250px;
 }
</style>