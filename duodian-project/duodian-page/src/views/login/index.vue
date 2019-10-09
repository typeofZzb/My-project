<template>
    <div class="wrap">
        <my-header></my-header>
        <div class="main">
            <div class="login_title">
                手机号登录
            </div>
            <div class="phone">
                <input type="text" placeholder="手机号" v-model="phone">
            </div>
            <button :class="{'checkcode':isCheck}"  @click="getCheckcode">获取验证码</button>
        </div>
        <my-dialog 
            @closeDialog="closeDialog" 
            v-if="dialogFlag"
            :phone="phone"
            @goHome="goHome"
        ></my-dialog>
    </div>
</template>
<script>
import api from "@/api/"
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            dialogFlag:false,//遮罩层中间量
            phone:"",//电话号码
            isCheck:true,//获取验证码按钮中间量
           
        }
    },
    computed:{

    },
    methods:{
        getCheckcode(){
            if(this.phone===''){
                alert("手机号不能为空")
                return;
            }
            this.dialogFlag=true;
            this.isCheck=false;
           api.checkCode({phone:this.phone}).then(res=>{
                console.log(res)
            })

        },
        closeDialog(){
            this.dialogFlag=false;
            this.isCheck=true
        },
        async goHome({data}){
            window.localStorage.setItem("token",data.token)
            this.$router.push({
                path: "/home"
            });
        }
        
    },

    created(){
        
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
.main{
     @include sizing;
     padding: pxTorem(0px) pxTorem(30px);
     .login_title{
        @include width(100%);
        @include height(pxTorem(66px));
        font-size: pxTorem(30px);
        @include box_flex;
        @include align;

    }
    button{
        @include width(100%);
        @include height(pxTorem(40px));
        border-radius: pxTorem(20px);
        background: #EEEEEE;
        color:#D0D0D0;
        border: none;
        outline: none;
        margin-top:pxTorem(48px) ;
    }
    .checkcode{
         background:orangered;
         color:#fff;
    }
    .phone{
        @include width(100%);
        @include height(pxTorem(84px));
        @include box_flex;
        @include align;
        @include sizing;
        border-bottom: pxTorem(2px) solid #F5F5F5;
        @include setBottomLine(#F5F5F5);
        input{
            font-size: pxTorem(14px);
            @include width(100%); 
            @include height(pxTorem(40px));
            color: #B2B2B2;
        }
    }
    
}

</style>