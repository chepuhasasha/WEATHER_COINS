<template lang="pug">
  .buffer
    .buffer_cell
      span.buffer_lbl(v-if='!minimize') Потратил USD
      .buffer_val 100
    .buffer_cell
      span.buffer_lbl(v-if='!minimize') Сейчас USD
      .buffer_val 89
    .buffer_cell
      span.buffer_lbl(v-if='!minimize') Купил BTC
      .buffer_val 0.013
    .buffer_cell
      span.buffer_lbl(v-if='!minimize') Профит
      .buffer_val -11%
    .buffer_cell
      span.buffer_lbl(v-if='!minimize') мин. профит
      .buffer_val 1%
    Button(text='➔' status='danger')
</template>

<script>
export default {
  name: 'Buffer',
  components: {
    Button: () => import('@/components/Button.vue'),
  },
  props: {
    profit: {
      type: Number,
      default: 0.1,
    },
    item: {
      type: Object,
      default: () => ({
        id: '',
        time: '',
        tool: {
          name: 'USD',
          val: 100,
        },
        target: {
          name: 'BTC',
          val: 0.003,
        },
        commission: 0.3,
        price: {
          now: 43924,
          buy: 44204,
        },
      }),
    },
  },
  data: () => ({
    minimize: false,
  }),
  computed: {
    now() {
      const now = this.item.target.val * this.item.price.now;
      return now - now * this.item.commission;
    },
    getProfit() {
      const expect = this.item.tool.val + this.item.tool.val * this.profit;
      return Math.floor(this.now - expect);
    },
  },
};
</script>

<style lang='less'>
@import '../less/global.less';
.buffer {
  transition: opacity ease .3s;
  display: flex;
  align-items: center;
  background: @bg_200;
  border: 1px solid @bg_100;
  padding: 5px;
  gap: 5px;
  opacity: 0.7;
  &:hover {
    opacity: 1;
    background: @bg_100;
  }
  &_cell {
    display: flex;
    flex-direction: column;
    background: @bg_0;
    padding: 5px;
    border-radius: 4px;
    gap: 5px;
    width: 100%;
  }
  &_val {
    line-height: 11px;
    font-size: 14px;
    color: @text_0;
  }
  &_lbl {
    font-size: 8px;
    color: @text_100;
    text-transform: uppercase;
    line-height: 6px;
  }
}
</style>
