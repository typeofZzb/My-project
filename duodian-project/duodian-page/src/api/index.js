import axios from "@/utils/axios";
export default {
    //获取验证码
    checkCode:(data)=>axios("post","/api/user/checkCode",{...data}),
    //获取用户信息
    getUserInfo: () => axios("get","/api//user/getUserInfo"),
    //登录
    Login:(data)=>axios("post","/api/user/login",{...data}),
    //轮播图
    Banner:()=>axios("get","/api/home/banner"),
    //首页数据
    Shop:(data)=>axios("get","/api/home/shop",{...data}),
    //获取分类页面分类
    ShopType:()=>axios("get","/api/shop/shopType"),
    //筛选分类页面商品
    SelectType:(data)=>axios("get","/api/shop/selectType",{...data}),
    //添加购物车或者增加件数
    AddCar:(data)=>axios("post","/api/car/addCar",{...data}),
    //获取购物车商品
    AllCar:(data)=>axios("get","/api/car/getCar",{...data}),
    //删除购物车商品
    RemoveShop:(data)=>axios("post","/api/car/removeShop",{...data}),
    //删除购物车商品件数
    RemoveCar:(data)=>axios("post","/api/car/removeCar",{...data}),
    //搜索
    Search:(data)=>axios("get","/api/search",{...data}),
}