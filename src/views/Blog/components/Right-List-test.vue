<template>
  <div>
      <RightList :list="list" @select="handleClick"></RightList>
  </div>
</template>

<script>
import RightList from "./RightList.vue"
export default {
    components:{
        RightList
    },
     data(){
        return{
            list:[{name:"a",isSelect:true},
            {name:"b",isSelect:false,children:[
                { name:"a",isSelect:true},
                { name:"b-1",isSelect:true},
                 { name:"b-2",isSelect:true},
                ]},
            {name:"c",isSelect:true},
            {name:"d",isSelect:true}
            ]
        }
    },
    methods:{
        handleClick(item){
            console.log(item)
        }
    }
} 
</script>

<style>

</style>