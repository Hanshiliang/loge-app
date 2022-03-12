<template>
  <nav class="menu-container">
      <router-link :exact="item.exact" v-for="item in items " :key="item.link" :to="{name:item.name}" >
          <div class="icon">
              <Icon :type="item.icon"></Icon>
          </div>
          <span>{{item.tittle}}</span>
      </router-link>
  </nav>
</template>

<script>
import Icon from "@/components/Icon"
export default {
    components:{
        Icon
    },
     data(){
        return{
            items:[
                {
                    name:"Home",
                    tittle:"首页",
                    icon:"home",
                     exact:true
                },
                 {
                    name:"Blog",
                    tittle:"文章",
                    icon:"blog",
                    //startWith:true,//只要当前路径以link开头，当前菜单就是选中的
                    exact:false,//激活状态是否要精确匹配
               },
               
                 {
                    name:"About",
                    tittle:"关于我",
                    icon:"about",
                     exact:true
                },
                 {
                    name:"Project",
                    tittle:"项目&效果",
                    icon:"code",
                     exact:true
                    
                },
                 {
                    name:"Message",
                    tittle:"留言板",
                    icon:"chat",
                    exact:true
                }
            ]
        }
    },
   /*  methods:{
         isSelected(item){
             var link=item.link.toLowerCase();
             var curPathname=location.pathname.toLowerCase()//
             if(item.startWith){
                return curPathname.startsWith(link);
             }else{
                return curPathname===link;
            }           
         }    
           } */
    
}
</script>

<style scoped lang="less">
@import url("~@/styles/var.less");
  .menu-container{
        color: @gray;
        margin: 24px auto;
        
        a{
            padding: 0 50px;
            display: block;
            display: flex;
            align-items: center;
            height: 45px;
            color: @gray; 
            text-decoration: none;
             &.router-link-active{
                background:darken(@words,3%) ;
            }          
        }
            .icon{
                width:24px;               
            }
            &:hover{
                color:#fff;
            }
           
        }
       
</style>