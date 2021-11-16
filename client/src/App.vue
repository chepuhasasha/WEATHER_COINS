<template lang="pug">
#app(:style='getGrid')
  //- button(@click='Massage') NEW MASSAGE
  Block(header='purse' :area='layout.purse' :gap='1' :padding='1')
    Purse(name='BTC' val='0.13929')
    Purse(name='RUB' val='1 000 000')
    Purse(name='USD' val='30 000')
  Block(header='Settings' :area='layout.settings' load)
    Button(text='Test')
  Block(header='Chart' :area='layout.chart' :padding='0')
    Chart
  Block(header='Orders' :area='layout.orders' :gap='0' load)
  Block(header='Buffer' :area='layout.buffer' :gap='1' :padding='1')
    template(v-slot:header)
      span 1000 RUB
      span (2)
    Buffer
    Buffer
    Buffer
    Buffer
    Buffer
  Block(header='Effect' :area='layout.effect' :padding='0')
    Chart
  Block(header='Log' :area='layout.log' :gap='1' :padding='1')
    template(v-slot:header)
      Button(text='1H' active)
      Button(text='1D')
      Button(text='1W')
    Event
    Event
    Event
    Event
    Event
    Event
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
      settings: '3/1/6/3',
      chart: '1/3/3/11',
      orders: '3/3/4/7',
      buffer: '3/7/4/11',
      effect: '4/3/6/11',
      log: '1/11/6/13',
    },
    something: [
      // ... something here for the data if you need.
    ],
  }),
  computed: {
    getGrid() {
      return {
        'grid-template-columns': `repeat(${this.layout.grid.cols}, 1fr)`,
        'grid-template-rows': `repeat(${this.layout.grid.rows}, 1fr)`,
        gap: `${this.layout.grid.gap}px`,
        padding: `${this.layout.grid.padding}px`,
      };
    },
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
