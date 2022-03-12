<template>
 <div style="position:relative">
      <Loading v-if="isLoading"></Loading>
      <button @click="isLoading=!isLoading">切换显示/隐藏</button>
 </div>
</template>

<script>
import Loading from "./";
export default {
    components: {
        Loading,
    },
    data(){
        return{
            isLoading:true
        }
    }
}
</script>

<style>

</style>