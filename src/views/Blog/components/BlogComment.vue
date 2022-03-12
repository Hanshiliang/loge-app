<template>
  <div class="blog-comment-container">
      <MessageArea title="评论列表" :subTitle="`(${data.total})`"
        :list="data.rows"
       :isListLoading="isLoading"
       @submit="handleSubmit"
      ></MessageArea>
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea"
import fetchData from "@/mixins/fetchData.js";
import {getComments,postComment} from "@/api/blog.js";
export default {
    mixins:[fetchData({total:0,rows:[]})],
    components:{
        MessageArea
    },
    data(){
        return{
            page:1,
            limit:10
        }
    },
    methods:{
        async handleScroll(dom){
            //console.log(dom)
            if(this.isLoading||!dom){
                //目前正在加载更多
                return
            }
            const range=100;//定一个可接受的范围，在这个范围内算到达了顶部
            const dec=Math. abs(dom.scrollTop+dom.clientHeight-dom.scrollHeight)
            if(dec<range){
                this.fetchMore();
                //console.log("到达底部")
            }
        },
        async fetchData(){
            return await getComments(this.$route.params.id,this.page,this.limit)
        },
        //加载下一页
        async fetchMore(){
            if(!this.hasMore){
                return//没有更多
            }
            this.isLoading=true;
            this.page++;
            const resp=await this.fetchData();
            this.data.total=resp.total;
            this.data.rows=this.data.rows.concat(resp.rows);
            this.isLoading=false
        },
        async handleSubmit(formData,callback){
            const resp=await postComment({
                blogId:this.$route.params.id,
                ...formData,
            })
            this.data.rows.unshift(resp)
            this.data.total++;
            callback("处理完成");//处理完了
        }
    },
     created(){
           //window.fetchMore=this.fetchMore;
            this.$bus.$on("mainScroll",this.handleScroll)
        },
        destroyed(){
            this.$bus.$off("mainScroll",this.handleScroll)
        },
        computed:{
            hasMore(){
                return this.data.rows.length<this.data.total;
            }
        },
}
</script>

<style lang="less" scoped>
    .blog-comment-container{
        margin:38px 0;
    }
</style>