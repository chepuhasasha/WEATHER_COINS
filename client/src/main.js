import Vue from 'vue';
import VueSocketIO from 'vue-socket.io';
import SocketIO from 'socket.io-client';
import App from './App.vue';
import store from './store';
import './less/main.less';

Vue.config.productionTip = false;

Vue.use(new VueSocketIO({
  debug: true,
  connection: SocketIO('http://localhost:3000', {
    withCredentials: true,
    transportOptions: {
      polling: {
        extraHeaders: {
          'my-custom-header': 'abcd',
        },
      },
    },
  }),
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_',
  },
}));

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
