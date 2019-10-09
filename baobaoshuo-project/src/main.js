
import Vue from 'vue';
import App from './App.vue';
import router from "./router/index";
import BaseUi from "./plugins/index"
import VueLazyload from 'vue-lazyload'
// import "./static/scss/_minix.scss"
// import "./static/scss/common.scss"
Vue.use(VueLazyload)//注册一下
Vue.use(BaseUi)
Vue.use(VueLazyload, {
  preLoad: 4,
  error: './static/images/1.jpg',
  loading: './static/images/loading.gif',
  attempt: 1
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app');

