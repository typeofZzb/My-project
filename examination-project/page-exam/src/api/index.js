const {axios}=require("@/utils/request")

module.exports={
    //登录接口
    login:(data)=>axios.post("/api/user/login",data),
    //用户信息
    getAuthInfo:()=>axios.get("/api/user/userInfo"),
    // 根据用户id，返回该用户的视图权限
    getUserinfoNew:(user_id)=>axios.get("/api/user/new?user_id="+user_id),
   // 添加试题接口
   getQuestion:()=>axios.post("/api/exam/questions"),
   // 获取所有试题接口
   getQuestionNew:()=>axios.get("/api/exam/questions/new"),
   // 获取所有的课程
   getQueSubject:()=>axios.get("/api/exam/subject"),
   // 获取所有的考试类型
   getQueExamType:()=>axios.get("/api/exam/examType"),
   // 获取所有的试题类型
   getQuestionsType:()=>axios.get("/api/exam/getQuestionsType"),
   // 添加试题
   addQuestion :(data) => axios.post("/api/exam/questions", data),
    //按条件获取试题
   getQuestions : (data)=>axios.get('/api/exam/questions/condition',{
        params:data
    }),
    //添加班级接口
    getClass:()=>axios.get("/api/manger/grade"),

}