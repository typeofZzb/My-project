const {axios}=require("@/utils/request")

module.exports={
    // 获取考试类型
    examType :()=>axios.get('/api/exam/examType'),
    /* 获取所有试题类型 */
    getQuestionType :()=> axios.get('/api/exam/getQuestionsType'),
    
    // 获取考试题目类型
    questionsNew :()=> axios.get('/api/exam/getQuestionsType'),
    
    // 获取课程类型
    subjectType :()=> axios.get('/api/exam/subject'),
    
    // 获取所有试题
    questionsAllnew :()=> axios.get('/api/exam/questions/new'),
    
    // 删除指定试题
    questionsDel :(delId)=> axios.post('/api/exam/delQuestionsType', {
        id: delId
    }),
    // 添加试题类型
    questionsInsert :(textName, sortId)=> axios.get('/api/exam/insertQuestionsType', {
        params: {
            text: textName,
            sort: sortId
        }
    })
}





