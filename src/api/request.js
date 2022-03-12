import axios from "axios";
import  showMessage  from "../utils/showMessage";

const ins=axios.create()//创建一个axios实例

//响应拦截器
ins.interceptors.response.use(function(res){
    //console.log("拦截器")
    if(res.data.code!==0){
        showMessage(res.data.msg,"error,1500")
        return null
    }
    return res.data.data
})

export default ins