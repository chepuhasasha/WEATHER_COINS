<template lang="pug">
  .buffer
    .buffer_status(:class='getClass')
    .buffer_cell(title='Потратил USD') 100
    .buffer_cell(title='Купил BTC') 0.013
    .buffer_cell(title='Профит') -11%
    .buffer_cell(title='мин. профит') 1%
    Button(text='➔')
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
        status: 'danger',
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
    status() {
      const statuses = ['danger', 'warning', 'sucsess'];
      return statuses[2];
    },
    getClass() {
      return {
        [this.$style[this.status]]: true,
      };
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
  background: @bg_0;
  border: @border_100;
  padding: 5px;
  gap: 5px;
  opacity: 0.7;
  &:hover {
    opacity: 1;
    border: 1px solid @bg_100;
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
    line-height: 11px;
    font-size: 14px;
    color: @text_0;
    font-weight: 300;
  }
  &_status {
    min-width: 2px;
    max-width: 2px;
    height: 100%;
  }
}
</style>
<style lang='less' module>
@import '../less/global.less';
.danger {
  background: @danger;
}
.warning {
  background: @warning;
}
.sucsess {
  background: @sucsess;
}
</style>
