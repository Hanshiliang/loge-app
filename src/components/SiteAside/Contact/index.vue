<template>
  <ul class="contact-container">
    <li>
        <a target="_blank" :href="data.github">
            <div class="icon">
                <Icon type="github"></Icon>
            </div>
            <span>{{data.githubName}}</span>
        </a>
    </li>

     <li>
        <a :href="`mailTo:${data.mail}`">
            <div class="icon">
                <Icon type="code"></Icon>
            </div>
            <span>{{data.mail}}</span>
        </a>
       
    </li>

     <li>
        <a :href="`tencent://message/?Menu=yes&uin=${data.qq}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`">
            <div class="icon">
                <Icon type="qq"></Icon>
            </div>
            <span>{{data.qq}}</span>
        </a>
        <div class="pop">
            <img :src="data.qqQrCode">
        </div>
    </li>
    <li>
        <a >
            <div class="icon weixin">
                <Icon type="weixin"></Icon>
            </div>
            <span>{{data.weixin}}</span>
        </a>
        <div class="pop">
            <img :src="data.weixinQrCode">
        </div>
    </li>
    
  </ul>
</template>

<script>
import "@/styles/global.less";
import Icon from "@/components/Icon"
import{mapState} from "vuex"
export default {
    components:{
        Icon
    },
    computed:mapState("setting",["data"])
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.contact-container{
    
    list-style: none;
    padding: 20px;
    margin:0;
    color:@gray;
    li{
        height:30px;
        line-height: 30px;
        margin:14px 0;
        cursor: pointer;
        position: relative;
        &:hover{
            .pop{
                transform: scaleY(1);
            }
        }
    }
    a{
        display: flex;
        align-items: center;
    }
    .icon{
        font-size: 26px;
        width:30px;
        &.weixin{
            font-size: 31px;
            text-indent: -3px;
        }
    }
    .pop{
        position: absolute;
        left: 0;
        bottom: 30px;
        padding:18px 15px;
        background-color: #fff;
        border-radius: 5px;
         margin-bottom: 4px;
         transform: scaleY(0);
         transform-origin: center bottom;
         transition: 0.3s;
        &::after{
            content:"";
            height:8px;
            width:8px;
            background: #fff;
            position: absolute;
            left: 50%;
            transform: translateX(-50%) rotate(45deg) ;
            bottom: -4px;
           
        }
    }
    img{
                height: 150px;
                width:150px;
                
            }
}
   
</style>