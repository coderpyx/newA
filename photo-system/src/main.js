import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false


import Antd from 'ant-design-vue';
import scrollBar from '@/components/scrollBar';
import loading from '@/components/loading/loading'; // 引入loading

import './icons'

import 'normalize.css/normalize.css'; //css resets
import 'ant-design-vue/dist/antd.css';
import 'animate.css';
import '@/components/scrollBar/index.scss';

Vue.component('scroll-bar', scrollBar);
Vue.use(Antd);

Vue.use(loading); // 全局使用loading

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
