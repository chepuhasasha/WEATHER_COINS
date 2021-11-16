<template lang="pug">
#app(:style='getGrid')
  Block(header='purse' :area='layout.purse' :gap='1' :padding='1')
    Purse(
      v-for='(item, i) in purse'
      :key='i'
      :name='item.name'
      :val='item.val')
  Block(header='Settings' :area='layout.settings' load)
    Button(text='Test')
  Block(header='Chart' :area='layout.chart' :padding='0')
    Chart
  Block(header='Orders' :area='layout.orders' :gap='0' load)
  Block(header='Buffer' :area='layout.buffer' :gap='1' :padding='1')
    template(v-slot:header)
      span {{ getBufferInfo.val }}
      span ({{ getBufferInfo.count }})
    Buffer(
      v-for='(item, i) in buffer'
      :key='i'
      :item='item')
  Block(header='Effect' :area='layout.effect' :padding='0')
    Chart
  Block(header='Log' :area='layout.log' :gap='1' :padding='1')
    template(v-slot:header)
      Button(text='1H' active)
      Button(text='1D')
      Button(text='1W')
    Event(
      v-for='(event, i) in log'
      :key='i'
      :event='event')
</template>

<script>
import log from '../data/log.json';
import purse from '../data/purse.json';
import buffer from '../data/buffer.json';

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
      purse: '1/1/2/3',
      settings: '4/1/6/3',
      orders: '2/1/4/3',
      chart: '1/3/4/11',
      buffer: '4/3/6/5',
      effect: '4/5/6/11',
      log: '1/11/6/13',
    },
    purse: [],
    log: [],
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
    getBufferInfo() {
      // const val = this.buffer.reduce((a, b) => a + b.spend.val);
      return {
        val: 1000,
        count: this.buffer.length,
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
    this.log = log;
    this.purse = purse;
    this.buffer = buffer;
    console.log(this.buffer);
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
