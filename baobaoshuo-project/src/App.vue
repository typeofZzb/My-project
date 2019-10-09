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
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,body,#app,.wrap{
  width: 100%;
  height: 100%;
}
.wrap{
  
  display: flex;
  flex-direction: column;
}
.img{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    width: 100%;
  height: 100%;
  }
}
</style>
