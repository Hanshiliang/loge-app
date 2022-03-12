<template>
  <img class="avatar-container" :src="url"
         :style="{
        height:size+'px',
        width:size+'px'
      }"/>
</template>

<script>
export default {
props:{
    url:{
        type:String,//url必须是字符串
        required:true// 属性必填
    },
    size:{
      type:Number,
      default:150//默认值
    }
}
}
</script>

<style scoped>
.avatar-container{
    border-radius: 50%;
    object-fit: cover;
    display: block;
}
</style>