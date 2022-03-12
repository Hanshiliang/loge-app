export default function(timertamp, showTime=false){
    const date=new Date(+timertamp);
    const month=(date.getMonth()).toString().padStart(2,0);
    const day=(date.getDate()).toString().padStart(2,0)
    let str= `${date.getFullYear()}-${month}-${day} `;
    if(showTime){
        const hour=date.getHours().toString().padStart(2,0);
        const minute=date.getMinutes().toString().padStart(2,0);
        const second=date.getSeconds().toString().padStart(2,0);
        str += `${hour}:${minute}:${second}`;
    }
    return str;
}