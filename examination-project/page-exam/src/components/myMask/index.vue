<template>
    <div class="mask" v-show="isMask">
        <slot>没有数据</slot>
    </div>
</template>

<script>
export default {
    props: {
        isMask: {
            type: Boolean,
            required: true
        }
    },
    data () {
        console.log(this)
        return {}
    }
}
</script>
