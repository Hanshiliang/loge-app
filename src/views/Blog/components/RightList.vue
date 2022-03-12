<template>
 <ul class="right-list-container">
      <li v-for="(item,i) in list"  :key="i">
        
         <span @click="handleClick(item)" :class="{active:item.isSelect}"> {{item.name}}</span>
         <span @click="handleClick(item)" v-if="item.aside" class="aside" :class="{active:item.isSelect}">{{item.aside}} </span>
          <!--显示当前组件-->
           <RightList :list="item.children" @select="handleClick"></RightList>
      </li>
  </ul>
 
</template>

<script>
export default {
    name:"RightList",
    props:{
        //[{name:xxx,isSelected:true},children[{name}]]
        list:{
            type:Array,
            default:()=>[]
        }
    },
    methods:{
        
     handleClick(item){
         if(!item.isSelect){
         this.$emit("select",item)
         }
           
        }
        
       
    }
}
</script>

<style scoped lang="less">
    @import url("~@/styles/var.less");
 .right-list-container{
        list-style: none;
        padding:0;
        .right-list-container{
          margin-left:1em ;
        }
        li{
            min-height:40px;
            line-height:40px;
            cursor: pointer;
            font-size: 14px;
        }
        .active{
            font-weight: bold;
            color:@warn;
        }
    }
    .a{
        font-size: 12px;
        margin-left: 1em;
        color: gray;
    }
    .aside{
        font-size: 12px;
        margin-left: 1em;
        color:@gray;
    }
</style>