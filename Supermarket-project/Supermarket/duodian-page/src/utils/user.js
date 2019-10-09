module.exports ={
    //用户信息
   userInfo:()=>{
        return JSON.parse(window.localStorage.getItem("userInfo"))
    }
}