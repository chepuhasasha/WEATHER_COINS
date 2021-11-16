<template lang="pug">
#app(:style='getGrid')
  //- button(@click='Massage') NEW MASSAGE
  Block(header='purse' :area='layout.purse' :gap='0' :padding='0')
    Purse(name='BTC' val='0.13929')
    Purse(name='RUB' val='1 000 000')
    Purse(name='USD' val='30 000')
  Block(header='Settings' :area='layout.settings' load)
    Button(text='Test')
  Block(header='Chart' :area='layout.chart' :padding='0')
    Chart
  Block(header='Buffer' :area='layout.buffer')
    Buffer
  Block(header='Log' :area='layout.log')
    Event
    Event
    Event
    Event
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
    Buffer: () => import('@/components/Buffer.vue'),
  },
  sockets: {
    connect() {
      console.log('CLIENT IO CONNECTED');
    },
  },
  data: () => ({
    layout: {
      grid: {
        rows: 5,
        cols: 12,
        gap: 10,
        padding: 10,
      },
      purse: '1/1/3/3',
      settings: '3/1/5/3',
      chart: '1/3/4/11',
      buffer: '4/3/5/11',
      log: '1/11/5/13',
    },
    something: [
      // ... something here for the data if you need.
    ],
  }),
  computed: {
    getGrid: () => ({
      'grid-template-columns': `repeat(${this.layout.grid.cols}, 1fr)`,
      'grid-template-rows': `repeat(${this.layout.grid.rows}, 1fr)`,
      gap: `${this.layout.grid.gap}px`,
      padding: `${this.layout.grid.padding}px`,
    }),
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

  background: @bg_0;
}
</style>
