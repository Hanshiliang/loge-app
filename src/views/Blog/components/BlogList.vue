<template>
  <div class="blog-list-container" ref="container" v-loading="isLoading">
    
    <ul>
      <li v-for="item in data.rows" :key="item.id">
        <div class="thumb" v-if="item.thumb">
          <a href="">
            <img
              v-lazy="item.thumb"
              :alt="item.title"
              :title="item.title"
            />
          </a>
        </div>
        <div class="main">
         <router-link :to="{name:'CategoryBlog'}">
           <h2>{{item.title}}</h2>
         </router-link>
          <div class="aside">
            <span>日期：{{formatDate(item.createDate)}}</span>
            <span>浏览：{{item.scanNumber}}</span>
            <span>评论:{{item.commentNumber}}</span>
            <router-link :to="{
              name:'CategoryBlog',
              params:{
                categoryId:item.category.id
              },
             }" class="">{{item.category.name}}</router-link>
          </div>
          <div class="desc">
            {{item.description}}
          </div>
        </div>
      </li>
    </ul>
    <Empty v-if="data.rows.length===0 && !isLoading" ></Empty>
    <!-- 分页放到这里 -->
   <div>
     
      <Pager :v-if="data.total"
     :current="routeInfo.page"
     :total="data.total"
     :limit="routeInfo.limit"
     :visibleNumber="10"
     @pageChange="handlePageChange"></Pager>
   </div>
  </div>
</template>
    <script>
    import Pager from "@/components/Pager"
    import fetchData from "@/mixins/fetchData.js";
    import {getBlogs} from "@/api/blog.js";
    import {formatDate} from "@/utils"
    import Empty from "@/components/Empty"
    export default{
        components:{
            Pager,
            Empty
        },
        mixins:[fetchData({total:0,rows:[]})],
        created(){
         console.log(this.routeInfo)
        },
        computed:{
            //获取路由信息
            routeInfo(){
                const categoryId=+this.$route.params.categoryId||-1;
                const page=+this.$route.query.page||1;
                const limit=+this.$route.query.limit||10;
                return{
                    categoryId,
                    page,
                    limit
                }
            } 
        },
        methods:{
            formatDate,
            async fetchData(){
               return await getBlogs()
            },
            handlePageChange(newPage){
                //console.log(newPage)
                const query={
                  page:newPage,
                  limit:this.routeInfo.limit
                }
                if(this.routeInfo.categoryId===-1){
                  this.$router.push({
                    name:"Blog",
                    query
                  })
                }else{
                  this.$router.push({
                    name:"CategoryBlog",
                    query,
                    params:{
                      categoryId:this.routeInfo.categoryId
                    }
                  })
                }
            },
             handleScroll(){
             this.$bus.$emit("mainScroll",this.$refs.container)

            //console.log("滚动条")
        },
        handleSetMainScroll(scrollTop){
            this.$refs.container.scrollTop=scrollTop;
        }
        },
         mounted(){
        this.$refs.container.addEventListener("scroll",this.handleScroll)
         this.$bus.$on("setMainScroll",this.handleSetMainScroll)
    },
     beforeDestroy(){
        this.$bus.$emit("mainScroll")
        this.$refs.container.removeEventListener("scroll",this.handleScroll)
         this.$bus.$off("setMainScroll",this.handleMainScroll)
    },
        watch:{
          async $route(){
            this.isLoading=true,
            //滚动高度为0
            this.$refs.container.scrollTop=0
            this.data=await this.fetchData();
            this.isLoading=false
          }
        }
    }
    
    </script>
    
<style scoped lang="less">
@import "~@/styles/var.less";
.blog-list-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth;//平滑滚动
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
li {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid @gray;
  .thumb {
    flex: 0 0 auto;
    margin-right: 15px;
    img {
      display: block;
      max-width: 200px;
      border-radius: 5px;
    }
  }
  .main {
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
  .aside {
    font-size: 12px;
    color: @gray;
    span {
      margin-right: 15px;
    }
  }
  .desc {
    margin: 15px 0;
    font-size: 14px;
  }
}
</style>