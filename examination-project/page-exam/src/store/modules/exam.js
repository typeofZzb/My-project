import api from "@/api/index"
const exam={
    namespaced:true,
    state:{
         // 所有的课程数据
        subject:[],
         // 所有的考试类型数据
        examType:[],
          //所有的试题类型数据
        type:[]
    },
    mutations:{
          // 设置所有的课程数据
        getSubject(state,opt){
            state.subject = opt;
        },
          // 设置所有的考试类型数据
        getExamtype(state,opt){
            state.examType = opt;
        },
          // 设置所有的试题类型数据
        getTypeters(state,opt){
            state.type = opt;
        }
    },
    getters:{
        getSubjectters(state){
            return state.subject;
        },
        getExamTypeters(state){
            return state.examType;
        },
        getterTypeters(state){
            return state.type;
        }
    },
    actions:{
        // 获取所有的课程
        getSubject({commit}){
            api.getQueSubject().then(res=>{
                commit("getSubject",res.data)
            })
        },
        // 获取所有的考试类型
        getExamtype({commit}){
            api.getQueExamType().then(res=>{
                commit("getExamtype",res.data)
            })
        },
        //获取所有的试题类型
        getTypeters({commit}){
            api.getQuestionsType().then(res=>{
                commit("getTypeters",res.data)
            })
        }
    }
}
export default  exam;
