// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Axios from 'axios'
import App from './App'
import router from './router'
// import VueAxios from 'vue-axios'

Vue.prototype.axios = Axios;
// Vue.use(VueAxios,axios);
Vue.config.productionTip = false;
//引入axios有两种方法  1.直接引入axios，import axios from 'axios' ，在vue的原型上写入axios方法，vue.prototype.axios=axios，在进行请求时，就可以了
//2.引入axios和vue-axios，import axios from 'axios'和import VueAxios from 'vue-axios'，然后执行，Vue.use(VueAxios,axios)，这样请求也是可以的

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
