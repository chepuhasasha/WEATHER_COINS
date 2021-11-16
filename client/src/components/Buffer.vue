<template lang="pug">
  .buffer
    .buffer_cell
      span.buffer_lbl spent
      .buffer_val {{ item.tool.val }} {{ item.tool.name }}
    .buffer_cell
      span.buffer_lbl now
      .buffer_val {{ now }} {{ item.tool.name }}
    .buffer_cell
      span.buffer_lbl profit
      .buffer_val {{ getProfit }} {{ item.tool.name }}
</template>

<script>
export default {
  name: 'Buffer',
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
  display: flex;
  align-items: center;
  background: @bg_100;
  padding: 5px;
  gap: 5px;
  &_cell {
    display: flex;
    flex-direction: column;
    background: @bg_0;
    padding: 5px;
    border-radius: 4px;
    gap: 5px;
  }
  &_val {
    line-height: 11px;
    font-size: 14px;
    color: @text_0;
  }
  &_lbl {
    font-size: 10px;
    color: @text_100;
    text-transform: uppercase;
    line-height: 8px;
  }
}
</style>
