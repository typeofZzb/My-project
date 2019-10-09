<template>
    <div>
        详情
        <video :src="this.$route.query.url" :poster="this.$route.query.pic" autoplay width="100%" height="auto" controls></video>
    </div>
</template>
<script>
export default {
    created(){
    }
}
</script>
