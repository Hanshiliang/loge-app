<template>
<Layout>
    <div ref="mainContainer" class="main-container" v-loading=""isLoading>
        <BlogDetail :blog="data" v-if="data"></BlogDetail>
        <BlogComment v-if="!isLoading"></BlogComment>
    </div>
    <template #right>
       <div class="right-container" v-loading="isLoading">
            <BlogTOC :toc="data.toc" v-if="data"></BlogTOC>
       </div>
    </template>
</Layout>
</template>

<script>
import fetchData from "@/mixins/fetchData";
import {getBlog} from "@/api/blog";
import Layout from "@/components/Layout";
import BlogDetail from "./components/BlogDetail"
import BlogTOC from "./components/BlogTOC.vue"
import BlogComment from "./components/BlogComment"
import {titleController} from "@/utils"

export default {
    components:{
        Layout,
        BlogDetail,
        BlogTOC,
        BlogComment
    },
    mixins:[fetchData(null)],
    methods:{
        async fetchData(){
            const resp= await getBlog(this.$route.params.id)
            titleController.setRouteTitle(resp.title)
            return resp;
       },
        handleScroll(){
             this.$bus.$emit("mainScroll",this.$refs.mainContainer)

            //console.log("滚动条")
        },
        handleSetMainScroll(scrollTop){
            this.$refs.mainContainer.scrollTop=scrollTop;
        }
    },
   
    mounted(){
        this.$refs.mainContainer.addEventListener("scroll",this.handleScroll)
         this.$bus.$on("setMainScroll",this.handleSetMainScroll)
    },
    beforeDestroy(){
        this.$bus.$emit("mainScroll")
        this.$refs.mainContainer.removeEventListener("scroll",this.handleScroll)
         this.$bus.$off("setMainScroll",this.handleMainScroll)
    },
    updated(){
        const hash=location.hash;
        location.hash="";
        setTimeout(()=>(
            location.hash=hash
        ),50)
    }
}
</script>

<style scoped >
    .main-container{
        overflow-y: scroll;
        height: 100%;
        box-sizing: border-box;
        padding:20px;
        position: relative;
        width: 100%;
        overflow-x: hidden;
        scroll-behavior: smooth;
    }
    .right-container{
        width:300px;
        height:100%;
        overflow-y: scroll;
        box-sizing: border-box;
        position:relative
    }
</style>