<template>
    <div class="protoPull" ref="scrollDom">
        <div ref="scrollContent">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){
        this.$nextTick(()=>{
            let that = this;
            this.$refs.scrollDom.onscroll = function(){
                let BoxHegiht = that.$refs.scrollDom.offsetHeight;           //大盒子的高度
                let contentHeight = that.$refs.scrollContent.offsetHeight;   //总共内容高度
                
                if(this.scrollTop >= contentHeight-BoxHegiht){
                    that.$emit('scroll')
                }
            }
        })
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    .protoPull{
        width: 100%;
        height: 100%;
        overflow: auto;
    }
</style>