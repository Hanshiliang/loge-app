<template>
  <div class="site-aside-container">
       <template v-if="data">
            <Avatar :url="data.avatar"></Avatar>
        <p v-if="data" class="tittle">{{data.siteTitle}}</p>
       </template>
       <Menu></Menu>
      <Contact v-if="data"></Contact>
     <p class="footer" v-if="data">{{data.icp}}</p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar"
import Contact from "./Contact";
import Menu from "./Menu";
import { mapState } from "vuex"
export default {
    components:{
        Avatar,
        Contact,
        Menu
    },
    computed:mapState("setting",["data"])
}
</script>

<style lang="less" scoped>
@import url("~@/styles/var.less");
.site-aside-container{
    background: @dark;
    height: 100%;
    width:100%;
    padding:20px 0;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;

}
.avatar-container{
    margin:0 auto;
}
.tittle{
    font-size: 1.2em;
    text-align: center;
    color:#fff;
}
.footer{
    font-size: 12px;
    text-align: center;
}
</style>