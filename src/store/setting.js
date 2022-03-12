import { getSetting } from "../api/setting";
import {titleController} from "@/utils"
export default{
    namespaced:true,
    state:{
        loading:false,
        data:null
    },
    mutations:{
        setLoading(state,payload){
            state.loading=payload

        },
        setData(state,payload){
            state.data=payload
        }
    },
    actions:{
        async fetchSetting(ctx){
            ctx.commit("setLoading",true);
            const resp=await getSetting()
            ctx.commit("setData",resp);
            ctx.commit("setLoading",false)
            //图标设置<link rel="shortcut icon" href="/jb51.ico" type="image/x-icon"/>
            if(resp.favicon){
                let link=document.querySelector("link[rel='shortcut icon']");
                if(link){
                    return
                }
                link=document.createElement("link");
                link.rel="shortcut icon";
                link.type="images/x-icon";
                link.href=resp.favicon;
                document.querySelector("head").appendChild(link)
            }
            //设置网站标题
            if(resp.siteTitle){
                titleController.setSiteTitle(resp.siteTitle)
            }
        }
    }
}