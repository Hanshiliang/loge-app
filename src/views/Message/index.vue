<template>
  <div ref="messageContainer" class="message-container">
    <MessageArea 
      title="留言板"
      :subTitle="`(${data.total})`"
      :isListLoading="isLoading"
      :list="data.rows"
      @submit="handleSubmit"
    ></MessageArea>
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea"
import fetchData from "@/mixins/fetchData.js"
import * as msgApi from "@/api/message.js"
import mainScroll from "@/mixins/mainScroll.js"
export default {
  components:{
    MessageArea
  },
  data(){
    return{
      page:1,
      limit:10
    }
  },
  mixins:[fetchData({total:0,rows:[]}),mainScroll("messageContainer")],
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
  methods:{
     async fetchData(){
        return msgApi.getMessage(this.page,this.limit)
      },
      async handleSubmit(data){//callback未完成
       //console.log(data)
        const resp = await msgApi.postMessage(data)
     // callback("感谢您的留言")
      this.data.rows.unshift(resp)
    },
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
  },
     
}
</script>

<style scoped>
.message-container{
  width:100%;
  height:100%;
  overflow-y: auto;
  padding:25px 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
.message-area-container{
  width:700px;
  margin:0 auto;
}

</style>