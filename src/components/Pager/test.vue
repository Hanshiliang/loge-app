<template>
  <div class="test-container">
      <Pager :total="100" :current="current" @pageChange="handlePageChange"></Pager>
       <Pager :total="182" :current="1"></Pager>
        <Pager :total="282" :current="13"></Pager>
  </div>
</template>

<script>
import Pager from "./"
export default {
    components:{
        Pager
    },
   data(){
      return{
           current:1
      }
   },
   methods:{
       handlePageChange(newPage){
           console.log("a")
           this.current=newPage
       }
   }

}
</script>

<style>

</style>