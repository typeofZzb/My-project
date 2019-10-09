import api from '@/api/'
export default {
  namespaced: true,
  state: {
    userinfo: {}
  },
  mutations: {
    setuserInfo(state, obj) {
      state.userinfo = obj
    },
    setlocal(state, str) {
      state.local1 = str
    }
  },
  actions: {
    async getuserinfo(context){
      let res = await api.getUserInfo();
      context.commit('setuserInfo',res.data);
    }
  }
}