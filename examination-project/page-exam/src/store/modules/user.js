import {
    userGetAll,
    userViewAuthority,
    userApiAuthority,
    userIdentity,
    userIdentityIpi,
    userViewApiAuthority,
    userIdentityViewAuthorityRelation
} from '@/api/user';
import listConfig from './user_list_config';
const {axios}=require("@/utils/request")


const user={
    namespaced:true,
    state:{
       /* 所有用户数据 */
        userData: [],
        /* 所有视图权限数据 */
        userAuthority: [],
        /* 所有api接口权限数据 */
        apiAuthority: [],
        /* 所有身份数据 */
        identityData: [],
        /* 身份和api接口关系 */
        identity_api_authority_relationData: [],
        /* 视图接口权限数据 */
        view_authorityData: [],
        /* 视图接口权限数据 */
        identity_view_authority_relationData: [],
        /* tab切换 */
        show_user_list: [],
        /* tab切换 */
        show_user_listkeys_title: [],
        menuListData: []
    },
    mutations:{
        /* 所有用户数据 */
        mutationuserData (state, arr) {
            state.userData = arr;
        },
        /* 所有视图权限数据 */
        mutationAuthority (state, arr) {
            state.userAuthority = arr;
        },
        /* 所有api接口权限数据 */
        mutationApiAuthority (state, arr) {
            state.apiAuthority = arr;
        },
        /* 所有身份数据 */
        mutationIdentityData (state, arr) {
            state.identityData = arr;
        },
        /* 身份和api接口关系 */
        mutationidentity_api_authority_relation (state, arr) {
            state.identity_api_authority_relationData = arr;
        },
        /* 视图接口权限数据 */
        mutationview_authority (state, arr) {
            state.view_authorityData = arr;
        },
        /* 视图接口权限数据 */
        mutationidentity_view_authority_relation (state, arr) {
            state.identity_view_authority_relationData = arr;
        },
        /* tab切换 */
        get_show_user_list (state, res) {
            state.show_user_list = res
        },
        /* tab切换 */
        get_show_user_list_config (state, data) {
            state.show_user_listkeys_title = data;
        },
        menuList (state, data) {
            state.menuListData = data
        }
    },
    getters:{
        /* 所有用户数据 */
        getData (state) {
            return state.userData
        },
        /* 所有视图权限数据 */
        getAuthority (state) {
            return state.userAuthority
        },
        /* 所有api接口权限数据 */
        getApiAuthority (state) {
            return state.apiAuthority
        },
        /* 所有身份数据 */
        getIdentityData (state) {
            return state.identityData
        },
        /* 身份和api接口关系 */
        getidentity_api_authority_relation (state) {
            return state.identity_api_authority_relationData
        },
        /* 视图接口权限数据 */
        getview_authority (state) {
            return state.view_authorityData
        },
        /* 视图接口权限数据 */
        getidentity_view_authority_relation (state) {
            return state.identity_view_authority_relationData
        },
        getMenuList (state) {
            return state.menuListData
        }
        
    },
    actions:{
        /* 所有用户数据 */
        actionUser ({ commit }) {
            userGetAll().then(res => {
                commit('mutationuserData', res.data)
            })
        },
        /* 所有视图权限数据 */
        actionAuthority ({ commit }) {
            userViewAuthority().then(res => {
                commit('mutationAuthority', res.data)
            })
        },
        /* 所有api接口权限数据 */
        actionApiAuthority ({ commit }) {
            userApiAuthority().then(res => {
                commit('mutationApiAuthority', res.data)
            })
        },
        /* 所有身份数据 */
        actionIdentity ({ commit }) {
            userIdentity().then(res => {
                commit('mutationIdentityData', res.data)
            })
        },
        /* 身份和api接口关系 */
        actionidentity_api_authority_relation ({ commit }) {
            userIdentityIpi().then(res => {
                commit('mutationidentity_api_authority_relation', res.data)
            })
        },
        /* 视图接口权限数据 */
        actionview_authority ({ commit }) {
            userViewApiAuthority().then(res => {
                commit('mutationview_authority', res.data)
            })
        },
        /* 身份和视图接口权限数据 */
        actionidentity_view_authority_relation ({ commit }) {
            userIdentityViewAuthorityRelation().then(res => {
                commit('mutationidentity_view_authority_relation', res.data)
            })
        },
        /* tab切换 */
        show_user_getdata ({ commit }, {port, ind}) {
            if (port === '/api/user/user') {
                commit('get_show_user_list_config', listConfig[ind])
            } else if (port === '/api/user/identity') {
                commit('get_show_user_list_config', listConfig[ind])
            } else if (port === '/api/user/api_authority') {
                commit('get_show_user_list_config', listConfig[ind])
            } else if (port === '/api/user/identity_api_authority_relation') {
                commit('get_show_user_list_config', listConfig[ind])
            } else if (port === '/api/user/view_authority') {
                commit('get_show_user_list_config', listConfig[ind])
            } else {
                commit('get_show_user_list_config', listConfig[ind])
            }
            axios.get(port).then(res => {
                commit('get_show_user_list', res.data)
            })
        },
            
        }
}
export default  user;
