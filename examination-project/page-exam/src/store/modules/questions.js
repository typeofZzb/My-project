// 考试类型
import { getQuestionType} from '@/api/questions'

const questions={
    namespaced:true,
    state:{
        // 考试问题数据
        questionsData: [],
        
    },
    mutations:{
       
        getDatajson (state, data) {11
            state.questionsData = data
        },
    },
    getters:{
       
        getDatatype (state) {
            return state.questionsData
        }
    },
    actions:{
        getData (context) {
            getQuestionType().then(res => {
                context.commit('getDatajson', res.data)
            })
        }
    }
}
export default  questions;

