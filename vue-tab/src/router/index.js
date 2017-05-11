import Vue from 'vue'
import path from 'path'
//import Bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import About from '@/components/About'

require("../../node_modules/bootstrap/dist/css/bootstrap.min.css");
// require(path.join(dirname,"/node_modules/bootstrap/dist/css/bootstrap.min.css"));

Vue.use(Router);
//Vue.use(Bootstrap);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
      // children:[{path:'About',name:'About',component:About}]
    },
    {path:'/',name:'About',component:About}
    //{
    //  path: '/',
    //  name: 'About',
    //  component: About
    //}
  ]
})
