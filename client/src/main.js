import './less/main.less';
import Vue from 'vue';
import VueSocketIO from 'vue-socket.io';
import SocketIO from 'socket.io-client';
import store from './store';
import App from './App.vue';

const options = {}; // Options object to pass into SocketIO

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: SocketIO('http://localhost:3000', options), // options object is Optional
    vuex: {
      store,
      actionPrefix: 'SOCKET_',
      mutationPrefix: 'SOCKET_',
    },
  }),
);

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
