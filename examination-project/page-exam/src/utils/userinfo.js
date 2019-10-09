//用户信息
export const getUserinfoNew=()=>{
    return JSON.parse(sessionStorage.getItem("userInfo"));
}
//token
export const authorization=()=>{
    return sessionStorage.getItem("authorization");
}
//每个编辑试题信息
export const questionsedtior=()=>{
    return JSON.parse(sessionStorage.getItem("questionsedtior"));
}
