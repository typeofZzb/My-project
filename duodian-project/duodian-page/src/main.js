import Vue from 'vue'
import App from './App'
import router from "./router/index"
import store from "./store/index"
import "@/static/scss/common.scss";
import plugins from "./plugins/index"
import Message from './plugins/message.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'
Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper)
Vue.use(plugins)
Vue.use(Message)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
