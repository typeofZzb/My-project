const {axios}=require("@/utils/request")

module.exports={
    /* 用户登录获取 token 权限 */
    userLogin :(userName, userPwd) => axios.post('/api/user/login', {
        user_name: userName,
        user_pwd: userPwd
    }),

    /* 获取用户信息 */
    userCurInfo :()=> axios.get('/api/user/userInfo'),

    /* 所有用户数据 */
    userGetAll :()=> axios.get('/api/user/user'),

    /* 更新用户信息 */
    userUpdate: ()=> axios.put('/user/user'),

    /* 所有视图权限数据 */
    userViewAuthority :()=> axios.get('/api/user/identity_view_authority_relation'),

    /* 所有api接口权限数据 */
    userApiAuthority :()=> axios.get('/api/user/api_authority'),

    /* 所有身份数据 */
    userIdentity :()=> axios.get('/api/user/identity'),

    /* 身份和api接口关系 */
    userIdentityIpi: ()=> axios.get('/api/user/identity_api_authority_relation'),

    /* 视图接口权限数据 */
    userViewApiAuthority :()=> axios.get('/api/user/view_authority'),

    /* 身份和视图接口权限数据 */
    userIdentityViewAuthorityRelation: ()=>  axios.get('/api/user/identity_view_authority_relation'),

    /* 添加用户 */
    userAdd :(userName, userPwd, userId)=>  axios.post('/api/user', {
        user_name: userName,
        user_pwd: userPwd,
        identity_id: userId
    }),
    /* 更新用户 */
    userUpdata :(userName, userPwd, userId, identityId)=>  axios.put('/api/user/user', {
        user_name: userName,
        user_pwd: userPwd,
        user_id: identityId,
        identity_id: userId
    }),
    /* 添加身份 */
    userAddIdentitEdit: (identityText)=> axios.get('/api/user/identity/edit', {
        params: {
            identity_text: identityText
        }
    }),
    /* 添加api接口权限 */
    userAuthorityApiEdit :(apiAuthorityText, apiAuthorityUrl, apiAuthorityMethod)=>  axios.get('/api/user/authorityApi/edit', {
        params: {
            api_authority_text: apiAuthorityText,
            api_authority_url: apiAuthorityUrl,
            api_authority_method: apiAuthorityMethod
        }
    }),
    /* 添加视图接口权限 */
    userAuthorityViewEdit :(viewAuthorityText, viewId)=>  axios.get('/api/user/authorityView/edit', {
        params: {
            view_authority_text: viewAuthorityText,
            view_id: viewId
        }
    }),
    /* 给身份设置api接口权限 */
    userSetIdentityApi: (apiAuthorityId, identityId)=> axios.post('/api/user/setIdentityApi', {
        api_authority_id: apiAuthorityId,
        identity_id: identityId
    }),
    /* 给身份设置视图权限 */
    userSetIdentityView :(identityId, viewAuthorityId)=>  axios.post('/api/user/setIdentityView', {
        identity_id: identityId,
        view_authority_id: viewAuthorityId
    }),
    /* 获取当前用户信息 */
    userAuthor :()=> axios.get('/api/user/userInfo')
}

