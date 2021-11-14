<template lang="pug">
#app
  //- button(@click='Massage') NEW MASSAGE
  Block(header='purse' area='1/1/3/3' :gap='0' :padding='0')
    Purse(name='BTC' val='0.13929')
    Purse(name='RUB' val='1 000 000')
    Purse(name='USD' val='30 000')
  Block(header='Settings' area='3/1/5/3' load)
    Button(text='Test')
  Block(header='Block' area='1/3/5/11' :padding='0')
    Chart
  Block(header='Log' area='1/11/3/13')
    Event
    Event
    Event
    Event
  Block(header='Buffer' area='3/11/5/13' load)
</template>

<script>
export default {
  name: 'App',
  components: {
    Block: () => import('@/components/Block.vue'),
    Button: () => import('@/components/Button.vue'),
    Chart: () => import('@/components/Chart.vue'),
    Event: () => import('@/components/Event.vue'),
    Purse: () => import('@/components/Purse.vue'),
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
  gap: 10px;
  padding: 20px;

  background: @bg_0;
}
</style>
