<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  
  }
}
</script>

<style lang="scss">
.wrap{
  @include width(100%);
  @include height(100%);
  @include sizing;
  @include box_flex;
  @include direction(column);
  .main{
    flex: 1;
    @include width(100%);
    @include height(100%);
   overflow: auto;

  }
}
</style>
