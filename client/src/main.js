import Vue from 'vue';
import { io } from 'socket.io-client';
import App from './App.vue';
import store from './store';
import './less/main.less';

const urls = ['https://3000-salmon-chameleon-3mhqgvbr.ws-eu18.gitpod.io/', 'http://localhost:3000'];
const socket = io(urls[0], {
  withCredentials: true,
  extraHeaders: {
    'my-custom-header': 'abcd',
  },
});

socket.on('connect', () => {
  console.log(socket.id); // x8WIv7-mJelg7on_ALbx
});

socket.on('disconnect', () => {
  console.log(socket.id); // undefined
});

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
