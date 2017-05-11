
import Vue from 'vue';
import axios from 'axios';
import App from './App';
import router from './router';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: { App: App }
});

//# sourceMappingURL=main-compiled.js.map