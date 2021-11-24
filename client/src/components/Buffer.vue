<template lang="pug">
  .buffer
    .buffer_body
      .buffer_cell(:title='item.sold.name')
        span.buffer_lbl SOLD
        .buffer_val {{ item.sold.val }}
      .buffer_cell(:title='item.bought.name')
        span.buffer_lbl BOUGHT
        .buffer_val {{ item.bought.val }}
    .buffer_body
      .buffer_cell
        span.buffer_lbl MIN
        .buffer_val 10%
      .buffer_cell
        span.buffer_lbl NOW
        .buffer_val -10%
    .buffer_cell
      .buffer_profit 10
      button.buffer_btn accept
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
        id: '123',
        time_open: '1637060400',
        profit: 0.3,
        commision: {
          taker: 0.3,
          maker: 0.3,
        },
        sold_price: 1234,
        sold: {
          name: 'RUB',
          val: 1000,
        },
        bought: {
          name: 'BTC',
          val: 0.0013,
        },
      }),
    },
  },
  data: () => ({
    minimize: false,
  }),
  computed: {
    status() {
      const statuses = ['danger', 'warning', 'sucsess'];
      return statuses[2];
    },
    getClass() {
      return {
        [this.status]: true,
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
  border-radius: 2px;
  padding: 5px;
  gap: 5px;
  opacity: 0.9;
  &:hover {
    opacity: 1;
    border: 1px solid @bg_100;
    background: @bg_200;
  }
  &_body {
    display: flex;
    flex-direction: column;
    background: @bg_100;
    padding: 5px;
    gap: 5px;
  }
  &_cell {
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    line-height: 11px;
    font-size: 14px;
    color: @text_0;
    font-weight: 300;
    background: @bg_100;
  }
  &_lbl, &_name {
    color: @text_100;
    font-size: 10px;
  }
  &_val {
    font-size: 12px;
    display: flex;
    gap: 5px;
  }
  &_profit {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    height: 100%;
    width: 100%;
  }
  &_status {
    min-width: 8px;
    max-width: 8px;
    min-height: 8px;
    max-height: 8px;
    border-radius: 50%;
  }
  &_btn {
    text-transform: uppercase;
    margin: 2px;
    cursor: pointer;
    font-size: 10px;
    border-radius: 0;
    background: @bg_0;
    font-weight: 300;
    color: @text_0;
    padding: 5px;
    &:hover {
      filter: brightness(150%);
    }
  }
}
</style>
