import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router/';
import store from '@/store/';

// import '@/utils/rem';
//elementU
import "@/config/elementUi";
//css样式
import "./static/scss/common.scss";
// //全局挂载公共组件
// import Plugin from "./plugin/index"
// font-logo
import "./static/fonts-logo/iconfont.css";
// 引入 vue富文本
import  VueQuillEditor from "vue-quill-editor";
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Vue.use(VueQuillEditor)
Vue.prototype.$bus = new Vue()
Vue.config.productionTip = false;

// //挂载
// Vue.use(Plugin)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
