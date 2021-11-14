<template lang="pug">
#app
  //- button(@click='Massage') NEW MASSAGE
  Block(header='Block' area='1/1/2/3')
    p
      |Lorem ipsum dolor sit amet, consectetur adipiscing
      |elit, sed do eiusmod tempor incididunt ut labore et
      |dolore magna aliqua. Ut enim ad minim veniam,
      |quis nostrud exercitation ullamco laboris nisi ut
      |aliquip ex ea commodo consequat.
    Button(text='Test')
  Block(header='Block' area='1/3/5/11' :padding='0')
    Chart
</template>

<script>
export default {
  name: 'App',
  components: {
    Block: () => import('@/components/Block.vue'),
    Button: () => import('@/components/Button.vue'),
    Chart: () => import('@/components/Chart.vue'),
  },
  sockets: {
    connect() {
      console.log('CLIENT IO CONNECTED');
    },
  },
  data() {
    return {
      something: [
        // ... something here for the data if you need.
      ],
    };
  },
  methods: {
    Massage() {
      this.$socket.emit('createMassage', {
        text: 'CLIENT MASSAGE',
      });
    },
  },
  mounted() {
    // this.$socket.subscribe("kebab-case", function (data) {
    //   console.log("This event was fired by eg. sio.emit('kebab-case')", data);
    // });
  },
};
</script>

<style lang="less">
@import './less/global.less';
#app {
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(4, 1fr);

  background: @bg_0;
}
</style>
