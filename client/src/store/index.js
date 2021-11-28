import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
    // "<MUTATION_PREFIX><EVENT_NAME>"() {
    //     // do something
    // }
  },
  actions: {
    SOCKET_newMassage(ctx, data) {
      console.log(`CLIENT: ${data}`);
    },
  },
});
