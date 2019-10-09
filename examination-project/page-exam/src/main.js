import Vue from 'vue';
import App from './App';
import router from "./router/index";
import store from "./store/index";
import Editor from 'mavon-editor'
//样式
import 'mavon-editor/dist/css/index.css'
import './config/element-ui';
import "./utils/rem";
import "./static/scss/common.scss";
import "./config/firstToUpperCase"

//全局挂载公共组件
import plugins from "./plugins/"
//挂载
Vue.use(plugins)
Vue.use(Editor)


Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
