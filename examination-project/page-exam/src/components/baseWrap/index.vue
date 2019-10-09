<template>
    <div class="base-wrap">
        <slot name="base_wrap">
            没有数据
        </slot>
    </div>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style lang="scss" scoped>
.base-wrap{
    padding: 10px 20px;
    background: white;
    border-radius: 10px;
    overflow: hidden;
}
</style>
